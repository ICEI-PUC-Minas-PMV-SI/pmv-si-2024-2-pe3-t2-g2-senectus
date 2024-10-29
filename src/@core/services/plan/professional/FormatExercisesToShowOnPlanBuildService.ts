import { ExerciseEntity } from '@core/models/ExerciseEntity'

export interface FormattedExercise {
  exercises: ExerciseEntity[]
  sortedExerciseName: string
  date: Date
}

export class FormatExercisesToShowOnPlanBuildService {
  static exec(
    sortedDateKeys: Record<string, ExerciseEntity[]>
  ): FormattedExercise[] {
    const exerciseNamesPerDate: Record<string, string> = {}

    for (const key in sortedDateKeys) {
      const exerciseNames = sortedDateKeys[key].map((item) => item.name)

      for (let i = 0; i < exerciseNames.length; i++) {
        let matches = 0
        for (let j = 0; j < exerciseNames.length; j++) {
          if (exerciseNames[j] === exerciseNames[i] && ++matches >= 2) {
            exerciseNames.splice(j, 1)
            --j
          }
        }
      }

      if (exerciseNames.length === 2)
        exerciseNamesPerDate[key] = exerciseNames.join(' e ')
      else if (exerciseNames.length > 2)
        exerciseNamesPerDate[key] =
          `${exerciseNames[0]}, ${exerciseNames[1]} e mais ${exerciseNames.length - 2}`
      else exerciseNamesPerDate[key] = exerciseNames[0]
    }

    return Object.entries(exerciseNamesPerDate).map(([k, v]) => ({
      exercises: sortedDateKeys[k],
      sortedExerciseName: v,
      date: new Date(parseInt(k))
    }))
  }
}
