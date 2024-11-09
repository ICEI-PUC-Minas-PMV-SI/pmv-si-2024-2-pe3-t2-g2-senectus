import { ExerciseEntity, ExerciseState } from '@core/models/ExerciseEntity'
import {
  TrainingPlanEntity,
  TrainingPlanExercise
} from '@core/models/TrainingPlanEntity'

export class GetNextExerciseService {
  static exec(plan: TrainingPlanEntity): ExerciseEntity | undefined {
    return GetNextExerciseService.findClosestExercise(plan.exerciseList)
  }

  private static findClosestExercise(list: TrainingPlanExercise[]) {
    const now = Date.now()
    let exercise: ExerciseEntity | undefined
    for (let i = 0; i < list.length; i++) {
      const item = list[i].content
      if (
        now < item.dateInMilli &&
        item.state === ExerciseState.PENDING &&
        (!exercise || exercise.dateInMilli > item.dateInMilli)
      )
        exercise = item
    }

    return exercise
  }
}
