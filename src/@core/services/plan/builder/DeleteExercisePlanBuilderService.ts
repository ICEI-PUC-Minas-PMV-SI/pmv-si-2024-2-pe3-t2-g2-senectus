import { PlanBuildStageContextProps } from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { FormattedExercise } from './FormatExercisesToShowOnPlanBuildService'

export class DeleteExercisePlanBuilderService {
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

    if (stack.dateInMilliList.length === 1) {
      payloadClone.exerciseStacks.splice(exerciseStackIndex, 1)
      if (payloadClone.stackHolderRef?.id === stackId)
        payloadClone.stackHolderRef = undefined

      if (payloadClone.exerciseStacks.length <= 1)
        return {
          ...prev,
          payload: payloadClone,
          avoidScrollOnTransition: true
        }

      return {
        ...prev,
        payload: payloadClone,
        avoidScrollOnTransition: true
      }
    }

    const dateInMilliListIndex = stack.dateInMilliList.findIndex(
      (item) => item === formattedExercise.date.getTime()
    )
    stack.dateInMilliList.splice(dateInMilliListIndex, 1)

    return {
      ...prev,
      payload: payloadClone,
      avoidScrollOnTransition: true
    }
  }
}
