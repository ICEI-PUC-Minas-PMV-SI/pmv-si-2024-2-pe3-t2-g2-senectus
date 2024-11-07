import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export class PlanBuilderSubmitService {
  static exec(router: AppRouterInstance, plan: TrainingPlanEntity) {
    const clone = plan.clone()
    clone.stackHolderRef = undefined

    TrainingPlansRepo.set(clone)
    router.push('/clients', { scroll: true })
  }
}
