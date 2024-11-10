import { getActualDay } from '@core/utils/getActualDay'
import { getDaysInTheMonth } from '@core/utils/getDaysInTheMonth'
import { getMonthDate } from '@core/utils/getMonthDate'

export interface TimeProps {
  monthRef: Date
  actualDay: Date
  firstWeekMonthDay: number
  daysInTheMonth: Date[]
  availableRows: number
}

export class HandleMonthChangeService {
  static exec(monthRef: Date, timezone: string, shouldDecrease?: boolean) {
    const month = monthRef.getMonth()
    const nextMonth = shouldDecrease ? month - 1 : month + 1
    const monthRefClone = new Date(monthRef.getTime())
    monthRefClone.setMonth(nextMonth)

    const firstWeekMonthDay = monthRefClone.getDay()
    const daysInTheMonth = getDaysInTheMonth(monthRefClone, timezone)
    const availableRows = Math.ceil(
      (daysInTheMonth.length + firstWeekMonthDay) / 7
    )

    return {
      firstWeekMonthDay,
      monthRef: monthRefClone,
      daysInTheMonth,
      availableRows
    }
  }

  static initialStart(timezone: string) {
    const actualDay = getActualDay(timezone)
    const monthRef = getMonthDate(actualDay, timezone)
    const firstWeekMonthDay = monthRef.getDay()

    const daysInTheMonth = getDaysInTheMonth(actualDay, timezone)
    const availableRows = Math.ceil(
      (daysInTheMonth.length + firstWeekMonthDay) / 7
    )
    return {
      actualDay,
      firstWeekMonthDay,
      daysInTheMonth,
      availableRows,
      monthRef
    }
  }
}
