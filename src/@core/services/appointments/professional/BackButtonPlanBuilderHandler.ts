import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { Dispatch, SetStateAction } from 'react'

export class BackButtonPlanBuilderHandler {
  static exec(
    context: PlanBuildStageContextProps,
    setContext: Dispatch<SetStateAction<PlanBuildStageContextProps>>
  ) {
    let historicClone = [...context.stageHistoric]
    const payload = context.payload

    let nextStage: PlanBuildStageEnum
    if (payload.stackHolderRef) nextStage = historicClone.pop()!
    else {
      nextStage = PlanBuildStageEnum.SELECT_EXERCISES
      historicClone = [PlanBuildStageEnum.SEARCH_CLIENT]
    }

    setContext((prev) => ({
      ...prev,
      stageId: nextStage!,
      stageHistoric: historicClone
    }))
  }
}
