import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { ClientEntity } from '@core/models/ClientEntity'

export class ClientSelectionHandlerService {
  static exec(
    prev: PlanBuildStageContextProps,
    client: ClientEntity
  ): PlanBuildStageContextProps {
    const clone = prev.payload.clone()
    clone.client = client.id

    const historicClone = [...prev.stageHistoric]
    historicClone.push(prev.stageId)

    return {
      stageId: PlanBuildStageEnum.SELECT_EXERCISES,
      stageHistoric: historicClone,
      avoidScrollOnTransition: false,
      payload: clone
    }
  }
}
