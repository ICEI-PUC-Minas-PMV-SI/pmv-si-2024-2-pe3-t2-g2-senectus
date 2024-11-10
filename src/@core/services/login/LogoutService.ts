import { TokenRepo } from '@core/repositories/TokenRepo'

export class LogoutService {
  static exec() {
    TokenRepo.delete()
  }
}
