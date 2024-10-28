import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import { makeUrlFriend } from '@core/utils/makeUrlFriend'

export class ExerciseSearchService {
  static initialFilter = makeUrlFriend(ExerciseRepo.getCategories()[0].id)

  static exec(key?: string, filter?: string) {
    if (!key && !filter) return ExerciseRepo.getAllExercises()

    if (key && !filter)
      return ExerciseRepo.findExercisesByMatchesInAllCategories(key)

    const parsedFilter = makeUrlFriend(filter!)
    if (!key && filter)
      return ExerciseRepo.getExercisesByCategoryId(parsedFilter)

    return ExerciseRepo.findExercisesByMatches(parsedFilter, key!)
  }
}
