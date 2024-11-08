import { ExerciseState } from '@core/models/ExerciseEntity'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export class GetPlanProgressService {
  static exec(plan: TrainingPlanEntity) {
    let finished = 0
    let skipped = 0
    let remaining = 0
    let spentHoursInMilli = 0
    const totalExercises = plan.exerciseList.length

    plan.exerciseList.forEach((exercise) => {
      const nowMinus30Minutes = Date.now() - 1000 * 60 * 30
      if (exercise.state === ExerciseState.DONE) {
        ++finished
        spentHoursInMilli = spentHoursInMilli + exercise.durationInMilli
      } else if (
        exercise.state === ExerciseState.PENDING &&
        exercise.dateInMilli < nowMinus30Minutes
      ) {
        ++skipped
      } else if (exercise.state === ExerciseState.PENDING) ++remaining
    })
    const progress = (finished * 100) / totalExercises

    return {
      finished,
      skipped,
      remaining,
      spentHoursInMilli,
      totalExercises,
      progress
    }
  }
}
