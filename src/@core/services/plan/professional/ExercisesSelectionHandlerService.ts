import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ExerciseStackEntity } from '@core/models/ExerciseStackEntity'

export class ExercisesSelectionHandlerService {
  static exec(prev: PlanBuildStageContextProps, exercises: ExerciseEntity[]) {
    const payloadClone = prev.payload.clone()
    const exercisesClone: ExerciseEntity[] = exercises.map((item) =>
      item.clone()
    )

    if (payloadClone.stackHolderRef) {
      payloadClone.stackHolderRef.exercises = exercisesClone
      const ref = payloadClone.stackHolderRef
      ref.exercises.forEach((exercise) => (exercise.exerciseStackId = ref.id))
      const searchedStack = payloadClone.exerciseStacks.find(
        (item) => item.id === ref.id
      )
      searchedStack!.exercises = exercisesClone

      const historicClone = [...prev.stageHistoric]
      historicClone.push(prev.stageId)

      return {
        stageId: PlanBuildStageEnum.SELECT_DATE,
        stageHistoric: historicClone,
        avoidScrollOnTransition: false,
        payload: payloadClone
      }
    }

    const exerciseStack = new ExerciseStackEntity({
      exercises: exercisesClone,
      dateInMilliList: []
    })
    exerciseStack.exercises.forEach(
      (exercise) => (exercise.exerciseStackId = exerciseStack.id)
    )
    payloadClone.exerciseStacks.push(exerciseStack)
    payloadClone.stackHolderRef = exerciseStack

    const historicClone = [...prev.stageHistoric]
    historicClone.push(prev.stageId)

    return {
      stageId: PlanBuildStageEnum.SELECT_DATE,
      stageHistoric: historicClone,
      avoidScrollOnTransition: false,
      payload: payloadClone
    }
  }
}
