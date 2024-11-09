import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import {
  TrainingPlanEntity,
  TrainingPlanExercise
} from '@core/models/TrainingPlanEntity'
import { format } from 'date-fns'

export enum CalendarCreationStrategy {
  EXERCISE_STACK = 'EXERCISE_STACK',
  EXERCISE_LIST = 'EXERCISE_LIST'
}

export class CreateCalendarCollectionByPlanService {
  static exec(
    plan: TrainingPlanEntity,
    strategy: CalendarCreationStrategy = CalendarCreationStrategy.EXERCISE_STACK
  ) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const collections: CollectionEventsOnDay<ExerciseEntity>[] = []

    if (strategy === CalendarCreationStrategy.EXERCISE_STACK)
      plan.exerciseStacks.map((stack) => {
        stack.dateInMilliList.forEach((milli) => {
          const exercises = stack.exercises.map((item) => {
            const clone = item.clone()
            clone.dateInMilli = milli
            return clone
          })
          CreateCalendarCollectionByPlanService.pushByExerciseStackToCollection(
            collections,
            exercises
          )
        })
      })
    else {
      CreateCalendarCollectionByPlanService.pushExerciseToCollection(
        collections,
        plan.exerciseList,
        timezone
      )
    }

    return collections
  }

  private static pushExerciseToCollection(
    collection: CollectionEventsOnDay<ExerciseEntity>[],
    exercises: TrainingPlanExercise[],
    timezone: string
  ) {
    if (exercises.length <= 0) return

    const exerciseListByDate: Record<string, ExerciseEntity[]> = {}
    for (let i = 0; i < exercises.length; i++) {
      const item = exercises[i].content
      const time = format(new Date(item.dateInMilli), 'yyyy-MM-dd')
      if (exerciseListByDate[time]) exerciseListByDate[time].push(item)
      else exerciseListByDate[time] = [item]
    }

    for (const key in exerciseListByDate) {
      const date = new Date(key + ` (${timezone})`)
      const newCollection = new CollectionEventsOnDay({
        monthDay: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        events: exerciseListByDate[key]
      })
      collection.push(newCollection)
    }
  }

  private static pushByExerciseStackToCollection(
    collection: CollectionEventsOnDay<ExerciseEntity>[],
    exercise: ExerciseEntity[]
  ) {
    if (exercise.length <= 0) return

    const date = new Date(exercise[0].dateInMilli)
    const newCollection = new CollectionEventsOnDay({
      monthDay: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      events: exercise
    })
    collection.push(newCollection)
  }
}
