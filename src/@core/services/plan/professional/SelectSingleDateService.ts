import { PlanBuildStageContextProps } from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { DateValue } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

export class SelectSingleDateService {
  static exec(
    selectedDate: DateValue,
    planContext: PlanBuildStageContextProps,
    dates: Date[],
    setDates: Dispatch<SetStateAction<Date[]>>,
    timezone: string
  ) {
    const parsedDate = selectedDate.toDate(timezone)

    let searchedDate: number | Date | undefined
    const exerciseStacks = planContext.payload.exerciseStacks
    for (let i = 0; i < exerciseStacks.length; i++) {
      const stack = exerciseStacks[i]
      searchedDate = stack.dateInMilliList.find((timeInMilli) => {
        const time = new Date(timeInMilli)
        return SelectSingleDateService.compareDates(time, parsedDate)
      })

      if (searchedDate) throw new Error('Horário já ocupado no calendário.')
    }

    searchedDate = dates.find((date) =>
      SelectSingleDateService.compareDates(date, parsedDate)
    )
    if (searchedDate) throw new Error('Não se pode repetir o horário.')

    setDates((prev) => [...prev, parsedDate])
  }

  private static compareDates(c1: Date, c2: Date) {
    return (
      c1.getDate() === c2.getDate() &&
      c1.getFullYear() === c2.getFullYear() &&
      c1.getHours() === c2.getHours() &&
      c1.getMinutes() === c2.getMinutes()
    )
  }
}
