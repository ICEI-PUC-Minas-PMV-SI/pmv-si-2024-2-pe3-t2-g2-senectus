import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'

interface UpdateTrainingPlanServiceProps {
  trainingPlan: TrainingPlanEntity
}

export class UpdateTrainingPlanService {
  static exec({ trainingPlan }: UpdateTrainingPlanServiceProps) {
    TrainingPlansRepo.set(trainingPlan)
  }
}
