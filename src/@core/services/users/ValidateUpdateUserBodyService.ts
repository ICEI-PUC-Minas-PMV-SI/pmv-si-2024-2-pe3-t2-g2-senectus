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
      .string({ message: 'Número de telefone inválido' })
      .min(14, 'Número de telefone inválido')
      .max(15, 'Número de telefone inválido')
    const state = z
      .string({ message: 'Estado precisa ser selecionado' })
      .min(1, 'Estado precisa ser selecionado')
      .max(60, 'Estado precisa ter no máximo 60 caracteres')
    const city = z
      .string({ message: 'Cidade precisa ser informada' })
      .min(1, 'Cidade precisa ser informada')
      .max(60, 'Cidade precisa ter no máximo 60 caracteres')
    const address = z
      .string({ message: 'Endereço precisa ser informado' })
      .min(1, 'Endereço precisa ser informado')
      .max(70, 'Endereço precisa ter no máximo 60 caracteres')

    const schema = z.object({
      name: z
        .string({ message: 'Nome precisa ter no mínimo 3 caracteres' })
        .min(3, 'Nome precisa ter no mínimo 3 caracteres')
        .max(320, 'Nome precisa ter no máximo 320 caracteres'),
      email: z
        .string({ message: 'Email inválido' })
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
