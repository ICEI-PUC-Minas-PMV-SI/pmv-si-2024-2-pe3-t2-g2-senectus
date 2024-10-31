import { ExerciseEntity } from '@core/models/ExerciseEntity'

export class SelectedExerciseSearchService {
  static exec(context: ExerciseEntity[], key?: string) {
    if (!key) return context

    const matches: ExerciseEntity[] = []
    const regex = new RegExp(key, 'i')
    for (let i = 0; i < context.length; i++) {
      if (regex.test(context[i].name) || regex.test(context[i].level))
        matches.push(context[i])
    }

    return matches
  }
}
