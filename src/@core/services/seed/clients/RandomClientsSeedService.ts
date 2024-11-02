import { userEntityFactory } from '@core/factories/userEntityFactory'
import { ClientEntity } from '@core/models/ClientEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export class RandomClientsSeedService {
  static exec(max: number): ClientEntity[] {
    const clients: ClientEntity[] = []
    for (let i = 0; i < max; i++) {
      const client = userEntityFactory({
        type: UserEntityTypeEnum.CLIENT,
        name: 'Diana Doe',
        email: 'dianadoe@email.com',
        password: '123456'
      }) as ClientEntity

      client.totalAppointments = Math.min(Math.floor(Math.random() * 51), 50)
      client.lastAppointmentInMilli = Date.now()
      clients.push(client)
    }

    return clients
  }
}
