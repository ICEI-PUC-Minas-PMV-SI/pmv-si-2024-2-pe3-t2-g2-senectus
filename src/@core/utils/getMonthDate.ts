import { format } from 'date-fns'

export function getMonthDate(date: Date, timezone: string) {
  return new Date(format(date, 'MMMM yyyy') + ` (${timezone})`)
}
