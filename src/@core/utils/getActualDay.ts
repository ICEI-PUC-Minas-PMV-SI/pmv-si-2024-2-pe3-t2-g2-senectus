import { format } from 'date-fns'

export function getActualDay(timezone: string) {
  return new Date(format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`)
}
