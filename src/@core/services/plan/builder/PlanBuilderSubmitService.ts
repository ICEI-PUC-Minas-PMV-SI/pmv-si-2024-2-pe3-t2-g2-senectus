import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { GetPlanProgressService } from '../crud/GetPlanProgressService'
import { Dispatch, SetStateAction } from 'react'

export class PlanBuilderSubmitService {
  static exec(
    router: AppRouterInstance,
    plan: TrainingPlanEntity,
    setIsLoading: Dispatch<SetStateAction<boolean>>
  ) {
    setIsLoading(false)
    const clone = plan.clone()
    clone.stackHolderRef = undefined

    TrainingPlansRepo.set(clone)
      .then((newPlan) => {
        const { progress } = GetPlanProgressService.exec(clone)
        newPlan.progress = progress // Recalcula o progresso no plano de treino que o usuário fez, caso o mesmo já exista
        TrainingPlansRepo.set(newPlan).finally(() => setIsLoading(false))
      })
      .catch(() => setIsLoading(false))

    router.push('/clients', { scroll: true })
  }
}
