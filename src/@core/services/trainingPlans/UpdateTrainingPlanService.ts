import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'

interface UpdateTrainingPlanServiceProps {
  trainingPlan: TrainingPlanEntity
}

export class UpdateTrainingPlanService {
  static exec({ trainingPlan }: UpdateTrainingPlanServiceProps) {
    const searchedPlan = TrainingPlansRepo.findById(trainingPlan.id)
    if (!searchedPlan) throw new Error('Este plano de treino não existe')
    TrainingPlansRepo.set(trainingPlan)
  }
}
