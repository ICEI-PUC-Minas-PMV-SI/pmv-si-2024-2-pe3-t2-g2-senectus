import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'

interface CreateTrainingPlanServiceProps {
  trainingPlan: TrainingPlanEntity
}

export class CreateTrainingPlanService {
  static exec({ trainingPlan }: CreateTrainingPlanServiceProps) {
    const clientId = trainingPlan.client
    const plan = TrainingPlansRepo.findByClientId(clientId)
    if (plan) throw new Error('Este cliente já tem um plano de treino')

    TrainingPlansRepo.set(trainingPlan)
  }
}
