import { userEntityFactory } from '@core/factories/userEntityFactory'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { ClientEntity } from '@core/models/ClientEntity'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { AppointmentsRepo } from '@core/repositories/AppointmentsRepo'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'

export class CreateDefaultAppointment {
  static exec() {
    const user = GetUserInfoService.exec()
    if (!user || user.type !== UserEntityTypeEnum.PROFESSIONAL) return

    const client = CreateDefaultAppointment.createClient()
    const professional = user as ProfessionalEntity
    if (!client.professionalIdList.find((item) => item === professional.id))
      CreateDefaultAppointment.createAppointment(professional, client)
  }

  private static createClient() {
    const email = 'pedroalmeida@email.com'
    const searchedClient = UsersRepo.findByEmail(
      email,
      UserEntityTypeEnum.CLIENT
    )
    if (searchedClient) return searchedClient as ClientEntity

    const client = userEntityFactory({
      name: 'Pedro Almeida',
      type: UserEntityTypeEnum.CLIENT,
      email,
      password: '123456',
      city: 'Belo Horizonte',
      state: 'MG',
      address: 'Rua da Harmonia, 789'
    })
    UsersRepo.set(client)
    return client as ClientEntity
  }

  private static createAppointment(
    professional: ProfessionalEntity,
    client: UserEntity
  ) {
    const appointment = new AppointmentsEntity({
      client: client.id,
      host: professional.id,
      dateInMilli: Date.now() + 1000 * 60 * 60 * 24,
      serviceType: `${professional.services[0].name} - R$${professional.services[0].price}`,
      description: 'Quero criar um novo hábito saudável para o próximo ano',
      state: AppointmentStateEnum.PENDENT
    })
    AppointmentsRepo.set(appointment)
  }
}
