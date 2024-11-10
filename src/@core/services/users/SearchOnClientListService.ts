import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { ServiceError } from '@core/errors/ServiceError'
import { ClientEntity } from '@core/models/ClientEntity'
import { sortInDesc } from '@core/services/sorters/SortPlanByDescProgress'
import { sortInAsc } from '@core/services/sorters/SortPlanByAscProgress'
import { ClientFiltersType } from '@components/clients/professionals/clients/AppProfessionalClientsSearchList'
import { GetAppointmentsService } from '../appointments/GetAppointmentsService'
import { AppointmentStateEnum } from '@core/models/AppointmentsEntity'

interface FormattedClient {
  client: ClientEntity
  lastAppointment: Date
  totalAppointments: number
}

export class SearchOnClientListService {
  static exec(
    inMemoryClients: FormattedClient[],
    key: string,
    filter: ClientFiltersType
  ): FormattedClient[] {
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
      return SearchOnClientListService.searchWithRegexp(inMemoryClients, key)
    }

    if (isKeyEmpty && filter) {
      return SearchOnClientListService.sortByFilter(inMemoryClients, filter)
    }

    const clients = SearchOnClientListService.searchWithRegexp(
      inMemoryClients,
      key
    )
    return SearchOnClientListService.sortByFilter(clients, filter)
  }

  static format(inMemoryClients: ClientEntity[]): FormattedClient[] {
    const appointments = GetAppointmentsService.exec()

    const parsedClients: FormattedClient[] = []
    for (let i = 0; i < inMemoryClients.length; i++) {
      const client = inMemoryClients[i]
      let totalAppointments = 0
      let lastAppointment: Date | undefined
      for (let i = 0; i < appointments.length; i++) {
        const item = appointments[i]
        if (
          item.client === client.id &&
          item.state === AppointmentStateEnum.DONE
        ) {
          ++totalAppointments
          if (!lastAppointment || item.dateInMilli > lastAppointment?.getTime())
            lastAppointment = new Date(item.dateInMilli)
        }
      }

      if (totalAppointments > 0)
        parsedClients.push({
          client,
          totalAppointments,
          lastAppointment: lastAppointment!
        })
    }

    return parsedClients
  }

  private static searchWithRegexp(
    inMemoryClients: FormattedClient[],
    key: string
  ) {
    const clone = [...inMemoryClients]

    const matches: ClientEntity[] = []
    const regexp = new RegExp(key, 'i')
    for (let i = 0; i < clone.length; i++) {
      const item = clone[i]
      if (regexp.test(item.client.name)) matches.push(item.client)
    }

    return SearchOnClientListService.format(matches)
  }

  private static sortByFilter(
    inMemoryClients: FormattedClient[],
    filter: ClientFiltersType
  ) {
    const clone = [...inMemoryClients]
    if (filter.toString() === 'Conclusão (decrescente)')
      clone.sort((c1, c2) =>
        sortInDesc(c1.totalAppointments, c2.totalAppointments)
      )
    else
      clone.sort((c1, c2) =>
        sortInAsc(c1.totalAppointments, c2.totalAppointments)
      )
    return clone
  }
}
