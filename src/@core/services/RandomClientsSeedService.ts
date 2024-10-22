import { ClientsEntity } from '@core/models/ClientsEntity'

export class RandomClientsSeedService {
  static exec(max: number): ClientsEntity[] {
    const clients: ClientsEntity[] = []
    for (let i = 0; i < max; i++) {
      clients.push(
        new ClientsEntity({
          name: 'John Doe',
          conclusionRate: Math.min(Math.floor(Math.random() * 101), 100)
        })
      )
    }

    return clients
  }
}
