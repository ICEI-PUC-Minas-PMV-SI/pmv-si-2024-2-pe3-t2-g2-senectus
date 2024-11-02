import { userEntityFactory } from '@core/factories/userEntityFactory'
import { ClientEntity } from '@core/models/ClientEntity'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { TokenRepo } from '@core/repositories/TokenRepo'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { AuthenticationService } from '@core/services/login/AuthenticationService'
import { GetRandomTrainingPlanService } from '../trainingPlan/GetRandomTrainingPlanService'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'

const staticClients = [
  {
    id: '891e9292-3a3c-4df2-9566-96ee16a23a3b',
    name: 'Alice Souza',
    email: 'alice.souza@example.com'
  },
  {
    id: '92439121-c414-40d1-b10e-892ce55ac6c2',
    name: 'Bruno Silva',
    email: 'bruno.silva@example.com'
  },
  {
    id: '84f01ee1-69b1-47e4-a8e1-9384fc9ae7d4',
    name: 'Carla Fernandes',
    email: 'carla.fernandes@example.com'
  },
  {
    id: '2449dc2b-3aa4-492b-a488-1a6b9ef5a6d0',
    name: 'Daniela Santos',
    email: 'daniela.santos@example.com'
  },
  {
    id: '4aff9449-8c47-4910-a5da-6129b235567f',
    name: 'Eduardo Lima',
    email: 'eduardo.lima@example.com'
  },
  {
    id: 'ca45ae12-a908-4276-b233-5b0f64d58024',
    name: 'Fernanda Costa',
    email: 'fernanda.costa@example.com'
  },
  {
    id: 'a2594bd2-2aba-44fc-ac27-ad11d334758f',
    name: 'Gustavo Oliveira',
    email: 'gustavo.oliveira@example.com'
  },
  {
    id: '6ba2ae22-ba46-4180-9ad5-3533ce625327',
    name: 'Helena Martins',
    email: 'helena.martins@example.com'
  },
  {
    id: '00e7e796-57e1-4984-9a78-96df92b9ac3c',
    name: 'Igor Ribeiro',
    email: 'igor.ribeiro@example.com'
  },
  {
    id: '5d47feb5-22b6-49c7-b564-c266ea2d93df',
    name: 'Juliana Azevedo',
    email: 'juliana.azevedo@example.com'
  },
  {
    id: '381a822b-3173-4ffb-8a58-4b58dd2303a5',
    name: 'Leonardo Alves',
    email: 'leonardo.alves@example.com'
  },
  {
    id: '64bf27a2-773d-4ab1-a029-ed7e3dd285e5',
    name: 'Mariana Rocha',
    email: 'mariana.rocha@example.com'
  },
  {
    id: '0790893a-e182-41e0-ac67-32884ca5e94d',
    name: 'Nicolas Moura',
    email: 'nicolas.moura@example.com'
  },
  {
    id: '57016f49-31b0-4521-891b-8348d58ce12d',
    name: 'Patrícia Barros',
    email: 'patricia.barros@example.com'
  },
  {
    id: 'ff2cb5d9-fd22-40b2-8725-be7bf66a974e',
    name: 'Roberto Mendes',
    email: 'roberto.mendes@example.com'
  }
]
export class ProfessionalSeed {
  static exec() {
    const user = UsersRepo.findByEmailWithoutType('johndoe@email.com')
    if (user) return

    const userAccount = userEntityFactory({
      type: UserEntityTypeEnum.PROFESSIONAL,
      email: 'johndoe@email.com',
      password: '123456',
      name: 'John Doe'
    }) as ProfessionalEntity
    const clientsId = ProfessionalSeed.createClients(userAccount.id)
    userAccount.clientIdList = clientsId

    UsersRepo.set(userAccount)

    const token = TokenRepo.get()
    if (!token)
      AuthenticationService.exec({
        email: userAccount.email,
        password: userAccount.password
      })
  }

  private static createClients(professionalId: string) {
    const clientsId: string[] = []
    for (let i = 0; i < staticClients.length; i++) {
      const item = staticClients[i]
      const user = userEntityFactory({
        type: UserEntityTypeEnum.CLIENT,
        id: item.id,
        email: item.email,
        name: item.name,
        password: '123456',
        professionalIdList: [professionalId]
      }) as ClientEntity

      UsersRepo.set(user)
      ProfessionalSeed.createTrainingPlan(user.id, professionalId)

      clientsId.push(user.id)
    }

    return clientsId
  }

  private static createTrainingPlan(clientId: string, professionalId: string) {
    const plan = GetRandomTrainingPlanService.exec()
    plan.client = clientId
    plan.owner = professionalId
    plan.progress = Math.min(Math.random() * 101, 100)
    TrainingPlansRepo.set(plan)
  }
}
