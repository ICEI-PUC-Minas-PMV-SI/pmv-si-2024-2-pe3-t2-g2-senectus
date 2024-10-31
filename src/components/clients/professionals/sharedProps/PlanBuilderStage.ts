import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

export enum PlanBuildStageEnum {
  SEARCH_CLIENT = 0,
  SELECT_EXERCISES = 1,
  SELECT_DATE = 2,
  CONFIRM = 3
}

export interface PlanBuildStageContextProps {
  stageId: PlanBuildStageEnum
  stageHistoric: PlanBuildStageEnum[]
  avoidScrollOnTransition: boolean
  payload: TrainingPlanEntity
}
