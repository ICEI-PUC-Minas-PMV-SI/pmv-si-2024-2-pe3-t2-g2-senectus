import { TrainingPlanFiltersType } from '@components/clients/professionals/home/AppProfessionalPlanSearchList'
import { SortPlanByAscProgress } from '../sorters/SortPlanByAscProgress'
import { TrainingPlansRepo } from '@core/repositories/TrainingPlansRepo'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import {
  SerializedTrainingPlanEntityProps,
  TrainingPlanEntity
} from '@core/models/TrainingPlanEntity'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ServiceError } from '@core/errors/ServiceError'
import { ClientEntity } from '@core/models/ClientEntity'
import { SortPlanByDescProgress } from '../sorters/SortPlanByDescProgress'

export type FormattedPlanProps = Replace<
  SerializedTrainingPlanEntityProps,
  { client: ClientEntity }
>

export class SearchTrainingPlanService {
  static exec(
    key: string,
    filter: TrainingPlanFiltersType
  ): FormattedPlanProps[] {
    const user = GetUserInfoService.exec()
    if (!user)
      throw new ServiceError({
        msg: 'Você não está autenticado',
        redirect: '/login'
      })

    const isKeyEmpty = !Boolean(key)
    const isFilterEmpty = !Boolean(filter)
    if (isKeyEmpty && isFilterEmpty) {
      const plans = TrainingPlansRepo.findAllByOwnerId(user.id)
      return SearchTrainingPlanService.formatPlan(plans)
    }

    if (key && isFilterEmpty)
      return SearchTrainingPlanService.searchWithRegexp(user.id, key)

    if (isKeyEmpty && filter) {
      const plans = TrainingPlansRepo.findAllByOwnerId(user.id)
      const formattedPlans = SearchTrainingPlanService.formatPlan(plans)
      return SearchTrainingPlanService.sortByFilter(formattedPlans, filter)
    }

    const plans = SearchTrainingPlanService.searchWithRegexp(user.id, key)
    return SearchTrainingPlanService.sortByFilter(plans, filter)
  }

  static formatPlan(trainingPlans: TrainingPlanEntity[]) {
    return trainingPlans.map((item) => {
      const serializedItem: SerializedTrainingPlanEntityProps = JSON.parse(
        item.serialize()
      )
      const searchedClient = GetUserByIdService.exec(
        serializedItem.client,
        UserEntityTypeEnum.CLIENT
      )
      if (!searchedClient)
        throw new Error(
          `Não foi possível encontrar cliente no plano de treino ${item.id}`
        )

      serializedItem.client = searchedClient as unknown as string
      return serializedItem as unknown as FormattedPlanProps
    })
  }

  private static searchWithRegexp(professionalId: string, key: string) {
    const plans = TrainingPlansRepo.findAllByOwnerId(professionalId)
    const formattedPlan = SearchTrainingPlanService.formatPlan(plans)

    const matches: FormattedPlanProps[] = []
    const regexp = new RegExp(key, 'i')
    for (let i = 0; i < formattedPlan.length; i++) {
      const item = formattedPlan[i]
      if (regexp.test(item.client.name) || regexp.test(String(item.progress)))
        matches.push(item)
    }

    return matches
  }

  private static sortByFilter(
    inMemoryPlans: FormattedPlanProps[],
    filter: TrainingPlanFiltersType
  ) {
    if (filter.toString() === 'Conclusão (decrescente)')
      return SortPlanByDescProgress.exec(inMemoryPlans)
    else return SortPlanByAscProgress.exec(inMemoryPlans)
  }
}
