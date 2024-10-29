import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export class PlanBuilderSubmitService {
  static exec(router: AppRouterInstance, plan: TrainingPlanEntity) {
    const clone = plan.clone()
    clone.stackHolderRef = undefined

    console.log(clone.serialize())
    router.push('/clients', { scroll: true })
  }
}
