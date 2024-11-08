import { UpdateUserForm } from '@components/configuration/AppConfigurationForm'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'
import { formatZodError } from '@core/utils/formatError'
import { z, ZodError } from 'zod'

type ValidateUpdateUserBodyReturnProps = UpdateUserForm & { isError?: boolean }

export class ValidateUpdateUserBodyService {
  static exec(
    user: UserEntity,
    props: UpdateUserForm
  ): ValidateUpdateUserBodyReturnProps {
    const phone = z
      .string()
      .min(14, 'Número de telefone inválido')
      .max(15, 'Número de telefone inválido')
    const state = z.string().min(1, 'Estado precisa ser selecionado')
    const city = z.string().min(1, 'Cidade precisa ser informada')
    const address = z.string().min(1, 'Endereço precisa ser informado')

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
      phone:
        user.type === UserEntityTypeEnum.CLIENT ? z.optional(phone) : phone,
      state:
        user.type === UserEntityTypeEnum.CLIENT ? z.optional(state) : state,
      city: user.type === UserEntityTypeEnum.CLIENT ? z.optional(city) : city,
      address:
        user.type === UserEntityTypeEnum.CLIENT ? z.optional(address) : address
    })

    try {
      const clone = {
        ...props,
        phone: props.phone.length <= 0 ? undefined : props.phone,
        state: props.state.length <= 0 ? undefined : props.state,
        city: props.city.length <= 0 ? undefined : props.city,
        address: props.address.length <= 0 ? undefined : props.address
      }
      schema.parse(clone)
      return props
    } catch (e) {
      const formattedError = formatZodError(props, e as ZodError)
      return {
        ...formattedError,
        isError: true
      }
    }
  }
}
