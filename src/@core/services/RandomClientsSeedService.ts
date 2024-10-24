import { ClientEntity } from '@core/models/ClientEntity'

export class RandomClientsSeedService {
  static exec(max: number): ClientEntity[] {
    const clients: ClientEntity[] = []
    for (let i = 0; i < max; i++) {
      clients.push(
        new ClientEntity({
          name: 'Nicolas Cleiton Basilio Viana Viana Viana Viana Viana',
          conclusionRate: Math.min(Math.floor(Math.random() * 101), 100)
        })
      )
    }

    return clients
  }
}
