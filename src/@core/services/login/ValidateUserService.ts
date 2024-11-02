import { JWTTokenType } from '@core/tokens/JWTTokenType'
import { z } from 'zod'

export class ValidateUserService {
  static exec(token: string): JWTTokenType {
    const slices = token.split('.')
    if (slices.length !== 3) throw new Error('Credenciais inválidas')

    const schema = z.object({
      type: z.union([z.literal('CLIENT'), z.literal('PROFESSIONAL')]),
      id: z.string(),
      name: z.string(),
      email: z.string(),
      createdAtInMilli: z.number(),
      phoneNumber: z.optional(z.string()),
      city: z.optional(z.string()),
      state: z.optional(z.string()),
      address: z.optional(z.string())
    })

    try {
      const result = schema.parse(JSON.parse(token))
      return result
    } catch {
      throw new Error('Dados corrompidos!')
    }
  }
}
