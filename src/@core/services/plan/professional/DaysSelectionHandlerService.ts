import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'

export class DaysSelectionHandlerService {
  static exec(
    prev: PlanBuildStageContextProps,
    dates: Date[]
  ): PlanBuildStageContextProps {
    const clone = prev.payload.clone()
    const ref = clone!.stackHolderRef
    ref!.dateInMilliList = dates.map((date) => date.getTime())

    const stack = clone.exerciseStacks.find((item) => item.id === ref!.id)
    stack!.dateInMilliList = ref!.dateInMilliList

    const historicClone = [...prev.stageHistoric]
    historicClone.push(prev.stageId)

    return {
      stageId: PlanBuildStageEnum.CONFIRM,
      stageHistoric: historicClone,
      avoidScrollOnTransition: false,
      payload: clone
    }
  }
}
