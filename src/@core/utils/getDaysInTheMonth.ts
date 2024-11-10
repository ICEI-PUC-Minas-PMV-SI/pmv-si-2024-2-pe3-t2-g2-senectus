import { addDays, getDaysInMonth } from 'date-fns'
import { getMonthDate } from './getMonthDate'

export function getDaysInTheMonth(date: Date, timezone: string) {
  const daysInTheMonth: Date[] = []
  let monthDateRef = getMonthDate(date, timezone)
  for (let i = 1; i <= getDaysInMonth(date); i++) {
    daysInTheMonth.push(monthDateRef)
    monthDateRef = addDays(monthDateRef, 1)
  }
  return daysInTheMonth
}
