import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export class CreateCalendarCollectionByPlanService {
  static exec(plan: TrainingPlanEntity) {
    const collections: CollectionEventsOnDay<ExerciseEntity>[] = []
    for (let day = 0; day < 31; day++) {
      collections.push(
        new CollectionEventsOnDay<ExerciseEntity>({
          monthDay: day + 1,
          events: []
        })
      )
    }

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

    return collections
  }
}
