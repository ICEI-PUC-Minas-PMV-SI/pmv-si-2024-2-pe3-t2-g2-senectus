import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'

export class SortExercisesByDateKeyService {
  static exec(exercises: CollectionEventsOnDay<ExerciseEntity>) {
    const dateKeys: Record<string, ExerciseEntity[]> = {}
    exercises.events.forEach((item) => {
      if (dateKeys[`${item.dateInMilli}`])
        dateKeys[`${item.dateInMilli}`].push(item)
      else dateKeys[`${item.dateInMilli}`] = [item]
    })

    return dateKeys
  }
}
