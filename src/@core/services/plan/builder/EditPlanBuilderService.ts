import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { FormattedExercise } from './FormatExercisesToShowOnPlanBuildService'

export class EditPlanBuilderService {
  static exec(
    prev: PlanBuildStageContextProps,
    formattedExercise: FormattedExercise
  ): PlanBuildStageContextProps {
    const payloadClone = prev.payload.clone()

    const exercises = formattedExercise.exercises
    const stackId = exercises[0].exerciseStackId
    const exerciseStackIndex = payloadClone.exerciseStacks.findIndex(
      (item) => item.id === stackId
    )
    const stack = payloadClone.exerciseStacks[exerciseStackIndex]

    payloadClone.stackHolderRef = stack

    const historicClone = [...prev.stageHistoric]
    historicClone.push(prev.stageId)

    return {
      stageId: PlanBuildStageEnum.SELECT_EXERCISES,
      stageHistoric: historicClone,
      avoidScrollOnTransition: false,
      payload: payloadClone
    }
  }
}
