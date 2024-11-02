import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { GetUserInfoService } from '../users/GetUserInfoService'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'

export class DeleteTrainingPlanService {
  static exec(clientId: string) {
    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!user) return

    const trainingPlan = TrainingPlansRepo.findByOwnerIdAndClientId(
      user.id,
      clientId
    )
    if (!trainingPlan) return

    TrainingPlansRepo.deleteById(trainingPlan.id)
  }
}
