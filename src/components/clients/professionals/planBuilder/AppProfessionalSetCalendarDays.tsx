import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDatePicker } from '@components/common/Inputs/DatePicker/AppDatePicker'
import { FaPlus, FaCircleXmark } from 'react-icons/fa6'
import { useState } from 'react'
import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'
import { now } from '@internationalized/date'
import Image from 'next/image'
import { DateValue } from '@nextui-org/react'
import { ProfessionalSetCalendarDaysStyle } from './ProfessionalSetCalendarDaysStyle'
import { ptBR as locale } from 'date-fns/locale/pt-BR'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'
import { PlanBuildStageContextProps } from '../sharedProps/PlanBuilderStage'
import { SelectSingleDateService } from '@core/services/plan/builder/SelectSingleDateService'

interface ErrorStateProps {
  state: boolean
  message?: string
}

interface AppProfessionalSetCalendarDaysProps {
  planContext: PlanBuildStageContextProps
  preSelectedDays?: Date[]
  onSelectedDays: (dates: Date[]) => void
}

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

export function AppProfessionalSetCalendarDays(
  props: AppProfessionalSetCalendarDaysProps
) {
  const [dates, setDates] = useState<Date[]>(props.preSelectedDays ?? [])
  const [selectedDate, setSelectedDate] = useState<DateValue | undefined>(
    now(timezone)
  )
  const [isInvalid, setIsInvalid] = useState<ErrorStateProps>({
    state: false
  })

  const addNewDate = () => {
    if (!selectedDate) return
    try {
      SelectSingleDateService.exec(
        selectedDate,
        props.planContext,
        dates,
        setDates,
        timezone
      )
    } catch (e) {
      setIsInvalid({ state: true, message: (e as Error).message })
    }
  }

  const removeDate = (date: Date) => {
    setDates((prev) => {
      const newArr = [...prev]
      const target = newArr.findIndex((item) => item === date)
      if (target >= 0) newArr.splice(target, 1)

      return newArr
    })
  }

  const onSubmit = () => {
    if (dates.length <= 0) {
      setIsInvalid({
        message: 'Nenhum horário selecionado',
        state: true
      })
      return NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        'Você precisa marcar pelo menos um horário.'
      )
    }

    props.onSelectedDays(dates)
  }

  return (
    <ProfessionalSetCalendarDaysStyle>
      <section id="inputs">
        <div id="fields">
          <AppDatePicker
            id="input-date-picker"
            label="Selecione uma data"
            value={selectedDate}
            fullWidth
            isInvalid={isInvalid.state}
            errorMessage={isInvalid.message}
            onChange={(date) => {
              setSelectedDate(date)
            }}
          />

          <button
            id="add"
            className={isInvalid.state ? 'invalid' : ''}
            onClick={addNewDate}
          >
            <FaPlus />
          </button>
        </div>
        <AppButtonActionRect text="Próximo" fullWidth onClick={onSubmit} />

        <Image
          src="/img/clients/meeting.svg"
          alt="Desenho de alguém interagindo com um calendário"
          width={100}
          height={100}
        />
      </section>

      {dates.length > 0 && (
        <>
          <span className="separator appear-animation"></span>
          <section id="date-board" className="appear-animation">
            <span></span>
            <ul>
              {dates.map((date) => (
                <li key={uuid()}>
                  {format(date, 'dd')} de {format(date, 'MMMM', { locale })} de{' '}
                  {format(date, 'yyyy')} às {format(date, 'HH:mm')}
                  <button onClick={() => removeDate(date)}>
                    <FaCircleXmark />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </ProfessionalSetCalendarDaysStyle>
  )
}
