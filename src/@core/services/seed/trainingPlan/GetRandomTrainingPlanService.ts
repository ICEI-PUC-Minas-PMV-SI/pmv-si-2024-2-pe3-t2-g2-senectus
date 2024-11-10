import { ExerciseStackEntity } from '@core/models/ExerciseStackEntity'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import { getActualDay } from '@core/utils/getActualDay'
import { getDaysInTheMonth } from '@core/utils/getDaysInTheMonth'
import { format } from 'date-fns'

export class GetRandomTrainingPlanService {
  static exec() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const now = getActualDay(timezone)

    const monthTarget = GetRandomTrainingPlanService.formatCalendarNumber(
      now.getMonth() + 1
    )
    const daysInTheMonth = getDaysInTheMonth(now, timezone)

    const dateInMilliList: number[] = []
    for (let i = 0; i < 5; i++) {
      const randomDayMonth =
        daysInTheMonth[
          Math.floor(Math.random() * Math.max(daysInTheMonth.length - 1, 0))
        ]
      const randomDate = new Date(
        `${now.getFullYear()}-${monthTarget}-${GetRandomTrainingPlanService.formatCalendarNumber(
          randomDayMonth.getDate()
        )} ${format(
          new Date(Date.now() + Math.floor(Math.random() * 82800000)),
          'HH:mm'
        )}:00 (${timezone})`
      )

      dateInMilliList.push(randomDate.getTime())
    }

    const exerciseStack = new ExerciseStackEntity({
      dateInMilliList: [],
      exercises: []
    })
    const exercises = ExerciseRepo.getCategories()[0].exercises.map((item) => {
      const clone = item.clone()
      clone.exerciseStackId = exerciseStack.id
      return clone
    })
    exerciseStack.exercises = exercises
    exerciseStack.dateInMilliList = dateInMilliList
    return new TrainingPlanEntity({
      owner: '',
      client: '',
      exerciseStacks: [exerciseStack]
    })
  }

  private static formatCalendarNumber(num: number) {
    return num > 9 ? `${num}` : `0${num}`
  }
}
