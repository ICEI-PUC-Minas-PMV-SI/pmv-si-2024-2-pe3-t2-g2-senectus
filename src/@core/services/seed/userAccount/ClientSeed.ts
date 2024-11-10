import { userEntityFactory } from '@core/factories/userEntityFactory'
import { ClientEntity } from '@core/models/ClientEntity'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { GetRandomTrainingPlanService } from '../trainingPlan/GetRandomTrainingPlanService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { RandomAppointmentsSeedService } from '../clients/RandomAppointmentsSeedService'
import { AppointmentStateEnum } from '@core/models/AppointmentsEntity'
import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { TokenRepo } from '@core/repositories/TokenRepo'
import { AuthenticationService } from '@core/services/login/AuthenticationService'
import { ProfessionalListSeed } from '../professionals/ProfessionalListSeed'

export class ClientSeed {
  static exec() {
    const user = UsersRepo.findByEmailWithoutType('dianadoe@email.com')
    if (user) return

    const userAccount = userEntityFactory({
      type: UserEntityTypeEnum.CLIENT,
      email: 'dianadoe@email.com',
      password: '123456',
      name: 'Diana Doe'
    }) as ClientEntity
    const professionalIdList = ClientSeed.createProfessionals(userAccount.id)
    userAccount.professionalIdList = professionalIdList

    UsersRepo.set(userAccount)

    const token = TokenRepo.get()
    if (!token)
      AuthenticationService.exec({
        email: userAccount.email,
        password: userAccount.password
      })
  }

  private static createProfessionals(clientId: string) {
    const staticProfessionals = ProfessionalListSeed.staticProfessionals
    const professionalsId: string[] = []
    for (let i = 0; i < staticProfessionals.length; i++) {
      const item = staticProfessionals[i]
      const user = userEntityFactory({
        type: UserEntityTypeEnum.PROFESSIONAL,
        id: item.id,
        email: item.email,
        name: item.name,
        password: '123456',
        clientIdList: [clientId]
      }) as ProfessionalEntity

      UsersRepo.set(user)

      ClientSeed.createRandomAppointments(clientId, user.id)
      professionalsId.push(user.id)
    }

    ClientSeed.createTrainingPlan(clientId, professionalsId[0])

    return professionalsId
  }

  private static createTrainingPlan(clientId: string, professionalId: string) {
    const plan = GetRandomTrainingPlanService.exec()
    plan.client = clientId
    plan.owner = professionalId
    TrainingPlansRepo.set(plan)
  }

  private static createRandomAppointments(
    clientId: string,
    professionalId: string
  ) {
    const accepted = RandomAppointmentsSeedService.exec(
      5,
      AppointmentStateEnum.PENDENT,
      professionalId,
      clientId
    )
    const pendent = RandomAppointmentsSeedService.exec(
      5,
      AppointmentStateEnum.ACCEPTED,
      professionalId,
      clientId
    )

    const lastAcceptedSliceIndex = Math.floor(accepted.length / 2)
    const acceptedSlice = accepted.slice(0, lastAcceptedSliceIndex)
    const pendentSlice = pendent.slice(
      lastAcceptedSliceIndex + 1,
      pendent.length - 1
    )

    const appointments = [...acceptedSlice, ...pendentSlice].flatMap(
      (item) => item.events
    )
    for (let i = 0; i < appointments.length; i++) {
      AppointmentsRepo.set(appointments[i])
    }
  }
}
