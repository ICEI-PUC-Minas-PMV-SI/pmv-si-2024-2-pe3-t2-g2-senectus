import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ServiceError } from '@core/errors/ServiceError'
import {
  JobConstant,
  ProfessionalEntity
} from '@core/models/ProfessionalEntity'

export class SearchOnProfessionalListService {
  static exec(
    inMemoryClients: ProfessionalEntity[],
    key: string,
    filter: JobConstant
  ): ProfessionalEntity[] {
    const user = GetUserInfoService.exec()
    if (!user)
      throw new ServiceError({
        msg: 'Você não está autenticado',
        redirect: '/login'
      })

    const isKeyEmpty = !Boolean(key)
    const isFilterEmpty = !Boolean(filter)
    if (isKeyEmpty && isFilterEmpty) return inMemoryClients

    if (key && isFilterEmpty) {
      return SearchOnProfessionalListService.searchWithRegexp(
        inMemoryClients,
        key
      )
    }

    if (isKeyEmpty && filter) {
      return SearchOnProfessionalListService.sortByFilter(
        inMemoryClients,
        filter
      )
    }

    const clients = SearchOnProfessionalListService.searchWithRegexp(
      inMemoryClients,
      key
    )
    return SearchOnProfessionalListService.sortByFilter(clients, filter)
  }

  private static searchWithRegexp(
    inMemoryProfessionals: ProfessionalEntity[],
    key: string
  ) {
    const clone = [...inMemoryProfessionals]

    const matches: ProfessionalEntity[] = []
    const regexp = new RegExp(key, 'i')
    for (let i = 0; i < clone.length; i++) {
      const item = clone[i]
      if (
        regexp.test(item.name) ||
        regexp.test(item.email) ||
        regexp.test(item.job!) ||
        regexp.test(item.city!) ||
        regexp.test(item.state!) ||
        regexp.test(item.address!) ||
        regexp.test(item.services.toString())
      )
        matches.push(item)
    }

    return matches
  }

  private static sortByFilter(
    inMemoryClients: ProfessionalEntity[],
    filter: JobConstant
  ) {
    const clone = [...inMemoryClients]
    return clone.filter((item) => item.job === filter)
  }
}
