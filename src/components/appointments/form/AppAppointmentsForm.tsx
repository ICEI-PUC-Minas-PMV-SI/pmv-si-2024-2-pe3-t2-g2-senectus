import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppAutocompleteInput } from '@components/common/Inputs/AutocompleteInput/AppAutocompleteInput'
import { AppDatePicker } from '@components/common/Inputs/DatePicker/AppDatePicker'
import { AppTextarea } from '@components/common/Inputs/Textarea/AppTextarea'
import { FaLocationDot, FaBullseye, FaBellConcierge } from 'react-icons/fa6'
import { AppointmentsFormStyle } from './AppointmentsFormStyle'

const availableServices = [
  'Programas de fortalecimento muscular',
  'Treinamento cardiovascular de baixo impacto',
  'Reabilitação pós-lesão ou cirurgia'
]
const availableLocations = [
  'Rua da Consolação, 455 - Consolação, São Paulo',
  'Avenida Paulista, 1578 (Sua casa)'
]

// Vou manter estático e retornar logo em seguida com a aplicação da regra de negócio
export function AppAppointmentsForm() {
  return (
    <AppointmentsFormStyle>
      <section id="first-row">
        <AppAutocompleteInput
          options={availableServices}
          label="Selecione o tipo de serviço"
          icon={<FaBellConcierge />}
          isRequired
        />

        <AppDatePicker label="Selecione uma data" isRequired />

        <AppAutocompleteInput
          label="Selecione o local da consulta"
          icon={<FaLocationDot />}
          options={availableLocations}
          isRequired
        />
      </section>

      <section id="second-row">
        <AppTextarea label="Objetivo da consulta" icon={<FaBullseye />} />
        <AppButtonActionRect
          id="confirmation-btn"
          type="submit"
          text="Salvar"
          fullWidth
        />
      </section>
    </AppointmentsFormStyle>
  )
}
