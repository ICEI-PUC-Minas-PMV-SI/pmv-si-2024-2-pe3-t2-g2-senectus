import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppAutocompleteInput } from '@components/common/Inputs/AutocompleteInput/AppAutocompleteInput'
import { AppDatePicker } from '@components/common/Inputs/DatePicker/AppDatePicker'
import { AppTextarea } from '@components/common/Inputs/Textarea/AppTextarea'
import { FaLocationDot, FaBullseye, FaBellConcierge } from 'react-icons/fa6'
import { AppointmentsFormStyle } from './AppointmentsFormStyle'
import { ChangeEvent, FormEvent, useContext, useMemo, useState } from 'react'
import { ReplaceAll } from '../../../types/ReplaceAll'
import { LoginContext } from '@context/LoginProvider'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { ClientEntity } from '@core/models/ClientEntity'
import { ValidateAppointmentFormService } from '@core/services/appointments/ValidateAppointmentFormService'
import { useRouter } from 'next/navigation'
import { CreateAppointmentService } from '@core/services/appointments/CreateAppointmentService'
import { now, fromDate } from '@internationalized/date'
import { AppSelectOutline } from '@components/common/Selects/AppSelectOutline'

export interface AppointmentFormProps {
  location: string
  description: string
  date?: Date
  service: string
}

interface AppAppointmentsFormProps {
  professional: ProfessionalEntity
}

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
export function AppAppointmentsForm({
  professional
}: AppAppointmentsFormProps) {
  const router = useRouter()
  const { auth } = useContext(LoginContext)
  const availableLocations = useMemo(() => {
    const professionalLocation = `${professional.location} (Profissional)`
    const client = GetUserByIdService.exec(
      auth.token.id,
      UserEntityTypeEnum.CLIENT
    ) as ClientEntity
    const clientLocation = `${client.location} (Sua casa)`

    if (client.location) return [professionalLocation, clientLocation]
    return [professionalLocation]
  }, [professional])

  const availableServices = useMemo(() => {
    return professional.services.map(
      (item) => `${item.name} - R$${item.price.toFixed(2)}`
    )
  }, [])

  const [form, setForm] = useState<AppointmentFormProps>({
    location: '',
    description: '',
    date: undefined,
    service: ''
  })
  const [error, setError] = useState<ReplaceAll<AppointmentFormProps, string>>({
    location: '',
    description: '',
    date: '',
    service: ''
  })

  const onLocationChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      location: value
    }))
  }

  const onServiceChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      service: value
    }))
  }

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      description: e.target.value
    }))
  }

  const onDateChange = (date: Date) => {
    setForm((prev) => ({
      ...prev,
      date
    }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const res = ValidateAppointmentFormService.exec({ form })
    if (res.isError) return setError(res)

    CreateAppointmentService.exec({
      professionalId: professional.id,
      date: form.date!,
      clientId: auth.token.id,
      serviceType: form.service,
      description: form.description
    })
    router.push('/appointments')
  }

  return (
    <AppointmentsFormStyle>
      <section id="first-row">
        <AppSelectOutline
          options={availableServices}
          label="Selecione o tipo de serviço"
          icon={<FaBellConcierge />}
          onChange={onServiceChange}
          isRequired
          isInvalid={Boolean(error.service)}
          errorMessage={error.service}
        />

        <AppDatePicker
          label="Selecione uma data"
          value={form.date ? fromDate(form.date, timezone) : now(timezone)}
          onChange={(date) => onDateChange(date.toDate(timezone))}
          isDateUnavailable={(date) => {
            const now = Date.now()
            const thirdMinutes = 1000 * 60 * 30
            if (date.toDate(timezone).getTime() < now + thirdMinutes)
              return true
            return false
          }}
          isRequired
          isInvalid={Boolean(error.date)}
          errorMessage={error.date}
        />

        <AppAutocompleteInput
          label="Selecione o local da consulta"
          icon={<FaLocationDot />}
          value={form.location}
          onChange={(e) => onLocationChange(e.target.value)}
          onSelectionChange={(key) =>
            onLocationChange(key ? key.toString() : '')
          }
          options={availableLocations}
          isRequired
          isInvalid={Boolean(error.location)}
          errorMessage={error.location}
        />
      </section>

      <section id="second-row">
        <AppTextarea
          label="Objetivo da consulta"
          icon={<FaBullseye />}
          value={form.description}
          onChange={onDescriptionChange}
          isInvalid={Boolean(error.description)}
          errorMessage={error.description}
        />
        <AppButtonActionRect
          id="confirmation-btn"
          type="submit"
          text="Salvar"
          fullWidth
          onClick={onSubmit}
        />
      </section>
    </AppointmentsFormStyle>
  )
}
