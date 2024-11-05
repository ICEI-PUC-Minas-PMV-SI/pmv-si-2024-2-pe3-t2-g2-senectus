import { JWTTokenType } from '@core/tokens/JWTTokenType'

export class TokenRepo {
  private static tokenCollectionId = 'token_payload'

  static get(): JWTTokenType | undefined {
    const token = localStorage.getItem(TokenRepo.tokenCollectionId)
    return token ? (JSON.parse(token) as JWTTokenType) : undefined
  }
  static set(token: JWTTokenType) {
    localStorage.setItem(TokenRepo.tokenCollectionId, JSON.stringify(token))
  }

  static delete() {
    localStorage.removeItem(TokenRepo.tokenCollectionId)
  }
}
