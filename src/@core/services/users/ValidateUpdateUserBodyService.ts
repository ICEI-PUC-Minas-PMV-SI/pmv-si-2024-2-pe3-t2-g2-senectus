import { UpdateUserForm } from '@components/configuration/AppConfigurationForm'
import { formatZodError } from '@core/utils/formatError'
import { z, ZodError } from 'zod'

type ValidateUpdateUserBodyReturnProps = UpdateUserForm & { isError?: boolean }

export class ValidateUpdateUserBodyService {
  static exec(props: UpdateUserForm): ValidateUpdateUserBodyReturnProps {
    const schema = z.object({
      name: z
        .string()
        .min(3, 'Nome precisa ter no mínimo 3 caracteres')
        .max(320, 'Nome precisa ter no máximo 320 caracteres'),
      email: z
        .string()
        .email('Email inválido')
        .min(3, 'Email precisa ter no mínimo 2 caracteres')
        .max(320, 'Email precisa ter no máximo 320 caracteres'),
      phone: z
        .string()
        .min(14, 'Número de telefone inválido')
        .max(15, 'Número de telefone inválido'),
      state: z.string().min(1, 'Estado precisa ser selecionado'),
      city: z.string().min(1, 'Cidade precisa ser informada'),
      address: z.string().min(1, 'Endereço precisa ser informado')
    })

    try {
      const res = schema.parse(props)
      return res
    } catch (e) {
      const formattedError = formatZodError(props, e as ZodError)
      return {
        ...formattedError,
        isError: true
      }
    }
  }
}
