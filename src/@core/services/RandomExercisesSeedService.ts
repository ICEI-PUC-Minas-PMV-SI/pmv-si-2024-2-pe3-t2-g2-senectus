import { format, getDaysInMonth } from 'date-fns'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

export class RandomExercisesSeedService {
  static exec(
    maxOfCollections: number
  ): CollectionEventsOnDay<ExerciseEntity>[] {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const now = new Date(format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`)

    const monthTarget = RandomExercisesSeedService.formatCalendarNumber(
      now.getMonth() + 1
    )
    const dayList: Record<string, ExerciseEntity[]> = {}

    const daysInTheMonth: number[] = []
    for (let i = 1; i <= getDaysInMonth(now); i++) daysInTheMonth.push(i)

    for (let i = 0; i < maxOfCollections; i++) {
      const randomDayMonth =
        daysInTheMonth[
          Math.floor(Math.random() * Math.max(daysInTheMonth.length - 1, 0))
        ]
      const randomDate = new Date(
        `${now.getFullYear()}-${monthTarget}-${RandomExercisesSeedService.formatCalendarNumber(
          randomDayMonth
        )} ${format(
          new Date(Date.now() + Math.floor(Math.random() * 82800000)),
          'HH:mm'
        )}:00 (${timezone})`
      )

      const dayArr: ExerciseEntity[] = []
      for (let i = 0; i < Math.min(Math.floor(Math.random() * 5), 4); i++) {
        const day = new ExerciseEntity({
          name: 'Levantamento de peso',
          level: RandomExercisesSeedService.getRandomLevel(),
          dateInMilli: randomDate.getTime()
        })

        dayArr.push(day)
      }

      const randomlySelectedDayOnMonth = `${randomDate.getDate()}`
      dayList[randomlySelectedDayOnMonth] = [
        ...(dayList[randomlySelectedDayOnMonth] ?? []),
        ...dayArr
      ]
      dayList[randomlySelectedDayOnMonth].sort((i1, i2) => {
        if (i1.dateInMilli < i2.dateInMilli) return -1
        if (i1.dateInMilli > i2.dateInMilli) return 1
        return 0
      })
    }

    const orderedDays: CollectionEventsOnDay<ExerciseEntity>[] = []
    for (let day = 0; day < 31; day++) {
      orderedDays.push(
        new CollectionEventsOnDay({
          events: dayList[`${day}`],
          monthDay: day
        })
      )
    }

    return orderedDays
  }

  private static getRandomLevel(): 'easy' | 'medium' | 'hard' {
    const rand = Math.min(Math.floor(Math.random() * 3), 2)
    switch (rand) {
      case 0:
        return 'easy'
      case 1:
        return 'medium'
      case 2:
        return 'hard'
      default:
        return 'easy'
    }
  }

  private static formatCalendarNumber(num: number) {
    return num > 9 ? `${num}` : `0${num}`
  }
}
