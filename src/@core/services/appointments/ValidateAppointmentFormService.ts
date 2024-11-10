import { AppointmentFormProps } from '@components/appointments/form/AppAppointmentsForm'
import { formatZodError } from '@core/utils/formatError'
import { z, ZodError } from 'zod'
import { ReplaceAll } from '../../../types/ReplaceAll'

interface ValidateAppointmentFormServiceProps {
  form: AppointmentFormProps
}

type AppointmentFormPropsReturn = AppointmentFormProps & { isError?: undefined }
type AppointmentFormPropsErrorReturn = ReplaceAll<
  AppointmentFormProps,
  string
> & { isError?: boolean }
export class ValidateAppointmentFormService {
  static exec(
    props: ValidateAppointmentFormServiceProps
  ): AppointmentFormPropsReturn | AppointmentFormPropsErrorReturn {
    const schema = z.object({
      location: z.string().min(1, 'A localização deve ser preenchida.'),
      service: z.string().min(1, 'Serviço não selecionado.'),
      description: z
        .string()
        .max(100, 'A descrição deve conter no máximo 100 caracteres.'),
      date: z.date({ message: 'Data não selecionada.' })
    })

    try {
      return schema.parse(props.form)
    } catch (e) {
      const formattedError = formatZodError(props.form, e as ZodError)

      return {
        ...formattedError,
        isError: true
      }
    }
  }
}
