import { theme } from '@themes/theme'
import { DatePicker, DatePickerProps } from '@nextui-org/date-picker'
import { FaCalendarDays } from 'react-icons/fa6'
import { DatePickerStyle } from './DatePickerStyle'
import { now } from '@internationalized/date'
import { useState, useEffect } from 'react'
import { DateValue } from '@nextui-org/react'

interface AppDatePickerProps extends Omit<DatePickerProps, 'label'> {
  label: string
}

function AppIcon() {
  return <FaCalendarDays style={{ color: theme.color.primaryColor }} />
}

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function AppDatePicker(props: AppDatePickerProps) {
  const [date, setDate] = useState<DateValue>(
    now(Intl.DateTimeFormat().resolvedOptions().timeZone)
  )
  const tryTranslateCalendar = () => {
    const calendars = document.querySelectorAll('[data-slot="calendar"]')
    for (let i = 0; i < calendars.length; i++) {
      const weekDays = calendars[i].querySelectorAll('th')
      if (!weekDays || weekDays.length <= 0) return

      weekDays.forEach((day, i) => {
        day.innerHTML = `<span>${days[i]}</span>`
      })
    }
  }

  useEffect(() => {
    const btn = document.querySelectorAll('[data-slot="selector-button"]')
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', tryTranslateCalendar)
    }

    return () => {
      for (let i = 0; i < btn.length; i++) {
        btn[i].removeEventListener('click', tryTranslateCalendar)
      }
    }
  }, [])

  return (
    <DatePickerStyle>
      <DatePicker
        className="date-picker"
        radius="sm"
        labelPlacement="outside"
        color="secondary"
        variant="bordered"
        selectorIcon={<AppIcon />}
        granularity="minute"
        placeholderValue={date}
        value={date}
        hourCycle={24}
        classNames={{ calendar: 'calendar' }}
        onFocus={tryTranslateCalendar}
        isDateUnavailable={(value) => {
          if (value.month !== date.month) return true
          return false
        }}
        hideTimeZone
        onChange={(value) => setDate(value)}
        style={{
          border: `1px solid ${theme.color.primaryColor}`,
          color: theme.color.textColor
        }}
        {...props}
      />
    </DatePickerStyle>
  )
}
