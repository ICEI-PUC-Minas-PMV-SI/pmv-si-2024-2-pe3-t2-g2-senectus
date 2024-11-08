import { UpdateProfessionalUserForm } from '@components/configuration/AppConfigurationFormProfessional'
import { formatZodError } from '@core/utils/formatError'
import { z, ZodError } from 'zod'

type ValidateJobInfosReturn = {
  job: string
  startAtInMilli: string | number
  isError?: boolean
}
type ValidateServiceInfosReturn = {
  name: string
  price: string | number
  isError?: boolean
}
interface ValidateServiceInfoInput {
  name: string
  price: number
}

export class ValidateUpdateProfessionalUserBodyService {
  static validateJobInfos(
    props: UpdateProfessionalUserForm
  ): ValidateJobInfosReturn {
    const schema = z.object({
      job: z.string().min(1, 'Selecione alguma profissão'),
      startAtInMilli: z.number().gt(0, 'Selecione uma data')
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

  static validateServiceInfo(
    props: ValidateServiceInfoInput
  ): ValidateServiceInfosReturn {
    const schema = z.object({
      name: z.string().min(8, 'Nome deve conter no mínimo 8 caracteres'),
      price: z.number().gt(0, 'Preço deve ser maior que zero')
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
