import { ExerciseStackEntity } from '@core/models/ExerciseStackEntity'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import { format, getDaysInMonth } from 'date-fns'

export class GetRandomTrainingPlanService {
  static exec() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const now = new Date(format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`)

    const monthTarget = GetRandomTrainingPlanService.formatCalendarNumber(
      now.getMonth() + 1
    )
    const dateInMilliList: number[] = []

    const daysInTheMonth: number[] = []
    for (let i = 1; i <= getDaysInMonth(now); i++) daysInTheMonth.push(i)

    for (let i = 0; i < 5; i++) {
      const randomDayMonth =
        daysInTheMonth[
          Math.floor(Math.random() * Math.max(daysInTheMonth.length - 1, 0))
        ]
      const randomDate = new Date(
        `${now.getFullYear()}-${monthTarget}-${GetRandomTrainingPlanService.formatCalendarNumber(
          randomDayMonth
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
