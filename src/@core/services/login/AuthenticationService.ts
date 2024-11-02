import { UserEntity } from '@core/models/UserEntity'
import { TokenRepo } from '@core/repositories/TokenRepo'
import { UsersRepo } from '@core/repositories/UsersRepo'
import { JWTTokenType } from '@core/tokens/JWTTokenType'

interface AuthenticationServiceProps {
  email: string
  password: string
}

export class AuthenticationService {
  static exec({ email, password }: AuthenticationServiceProps) {
    const user = UsersRepo.findByEmailWithoutType(email)
    if (!user || user.password !== password)
      throw new Error('Credenciais inválidas')

    const jwt = AuthenticationService.genJWT(user)
    TokenRepo.set(jwt.payload)
    return jwt.token
  }

  private static genJWT(user: UserEntity) {
    const header = JSON.stringify({ alg: 'none', typ: 'JWT' })
    const payload: JWTTokenType = {
      type: user.type,
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.city,
      state: user.state,
      address: user.address,
      phoneNumber: user.phoneNumber,
      createdAtInMilli: user.createdAtInMilli
    }
    return {
      token: `${btoa(header).replaceAll('=', '')}.${btoa(JSON.stringify(payload)).replaceAll('=', '')}.`,
      payload
    }
  }
}
