import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import { makeUrlFriend } from '@core/utils/makeUrlFriend'

export class ExerciseSearchService {
  static initialFilter = makeUrlFriend(ExerciseRepo.getCategories()[0].id)

  static exec(key: string, filter: string) {
    const isKeyEmpty = !Boolean(key)
    const isFilterEmpty = !Boolean(filter)
    if (isKeyEmpty && isFilterEmpty) return ExerciseRepo.getAllExercises()

    if (key && isFilterEmpty)
      return ExerciseRepo.findExercisesByMatchesInAllCategories(key)

    const parsedFilter = makeUrlFriend(filter!)
    if (isKeyEmpty && filter)
      return ExerciseRepo.getExercisesByCategoryId(parsedFilter)

    return ExerciseRepo.findExercisesByMatches(parsedFilter, key!)
  }
}
