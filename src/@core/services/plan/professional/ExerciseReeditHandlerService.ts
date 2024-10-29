import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'

export class ExerciseReeditHandlerService {
  static exec(prev: PlanBuildStageContextProps): PlanBuildStageContextProps {
    const historicClone = [...prev.stageHistoric]
    historicClone.push(prev.stageId)

    prev.payload.stackHolderRef = undefined // descarta referência da pilha que acabou de ser editada
    return {
      ...prev,
      avoidScrollOnTransition: false,
      stageId: PlanBuildStageEnum.SELECT_EXERCISES,
      stageHistoric: historicClone
    }
  }
}
