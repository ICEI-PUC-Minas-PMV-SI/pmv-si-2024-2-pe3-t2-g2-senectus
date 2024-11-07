import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { GetPlanProgressService } from '../crud/GetPlanProgressService'

export class PlanBuilderSubmitService {
  static exec(router: AppRouterInstance, plan: TrainingPlanEntity) {
    const clone = plan.clone()
    clone.stackHolderRef = undefined

    const { progress } = GetPlanProgressService.exec(clone)
    clone.progress = progress // Recalcula o progresso no plano de treino que o usuário fez, caso o mesmo já exista

    TrainingPlansRepo.set(clone)
    router.push('/clients', { scroll: true })
  }
}
