import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export enum CalendarCreationStrategy {
  EXERCISE_STACK = 'EXERCISE_STACK',
  EXERCISE_LIST = 'EXERCISE_LIST'
}

export class CreateCalendarCollectionByPlanService {
  static exec(
    plan: TrainingPlanEntity,
    strategy: CalendarCreationStrategy = CalendarCreationStrategy.EXERCISE_STACK
  ) {
    const collections: CollectionEventsOnDay<ExerciseEntity>[] = []
    for (let day = 0; day < 31; day++) {
      collections.push(
        new CollectionEventsOnDay<ExerciseEntity>({
          monthDay: day + 1,
          events: []
        })
      )
    }

    if (strategy === CalendarCreationStrategy.EXERCISE_STACK)
      plan.exerciseStacks.map((stack) => {
        stack.dateInMilliList.forEach((milli) => {
          const exercises = stack.exercises.map((item) => {
            const clone = item.clone()
            clone.dateInMilli = milli
            return clone
          })
          const date = new Date(milli)
          const monthDay = date.getDate()
          if (!collections[monthDay - 1].events)
            collections[monthDay - 1].events = exercises
          else collections[monthDay - 1].events.push(...exercises)
        })
      })
    else {
      plan.exerciseList.map((exercise) => {
        const date = new Date(exercise.dateInMilli)
        const monthDay = date.getDate()
        if (!collections[monthDay - 1].events)
          collections[monthDay - 1].events = [exercise]
        else collections[monthDay - 1].events.push(exercise)
      })
    }

    return collections
  }
}
