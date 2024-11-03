import { SignUpFormProps } from '@components/signup/AppFormSignUp'
import { formatZodError } from '@core/utils/formatError'
import { z, ZodError } from 'zod'

// Agrega-se todos os dados do formulário junto com o atributo isError
type SignUpFormPropsReturn = SignUpFormProps & { isError?: boolean }

export class ValidateFormService {
  static exec(objt: SignUpFormProps): SignUpFormPropsReturn {
    const schema = z.object({
      name: z
        .string()
        .email('Nome inválido')
        .min(3, 'Nome precisa ter no mínimo 2 caracteres')
        .max(320, 'Nome precisa ter no máximo 320 caracteres'),  
      email: z
        .string()
        .email('Email inválido')
        .min(3, 'Email precisa ter no mínimo 2 caracteres')
        .max(320, 'Email precisa ter no máximo 320 caracteres'),
      password: z
        .string()
        .min(6, 'Senha precisa ter no mínimo 6 caracteres')
        .max(100, 'Senha precisa ter no máximo 100 caracteres')
    })

    try {
      const res = schema.parse(objt)
      return res
    } catch (e) {
      // formatZodError vai coletar os erros definidos no esquema acima
      const formattedError = formatZodError(objt, e as ZodError)
      return {
        ...formattedError,
        isError: true
      }
    }
  }
}