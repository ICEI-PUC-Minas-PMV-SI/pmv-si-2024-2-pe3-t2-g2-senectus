import { format } from 'date-fns'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import {
  AppointmentsEntity,
  AppointmentStateEnum
} from '@core/models/AppointmentsEntity'
import { getDaysInTheMonth } from '@core/utils/getDaysInTheMonth'

export class RandomAppointmentsSeedService {
  static exec(
    maxOfCollections: number,
    appointmentState: AppointmentStateEnum,
    hostId?: string,
    clientId?: string
  ): CollectionEventsOnDay<AppointmentsEntity>[] {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const now = new Date(format(new Date(), 'yyyy-MM-dd') + ` (${timezone})`)

    const monthTarget = RandomAppointmentsSeedService.formatCalendarNumber(
      now.getMonth() + 1
    )
    const daysInTheMonth = getDaysInTheMonth(now, timezone)
    const collections: CollectionEventsOnDay<AppointmentsEntity>[] = []

    for (let i = 0; i < maxOfCollections; i++) {
      const randomDayMonth =
        daysInTheMonth[
          Math.floor(Math.random() * Math.max(daysInTheMonth.length - 1, 0))
        ]
      const randomDate = new Date(
        `${now.getFullYear()}-${monthTarget}-${RandomAppointmentsSeedService.formatCalendarNumber(
          randomDayMonth.getDate()
        )} ${format(
          new Date(Date.now() + Math.floor(Math.random() * 82800000)),
          'HH:mm'
        )}:00 (${timezone})`
      )

      const appointments: AppointmentsEntity[] = []
      for (let i = 0; i < Math.min(Math.floor(Math.random() * 5), 4); i++) {
        const day = new AppointmentsEntity({
          host: hostId ?? 'John Doe',
          client: clientId ?? 'Diana Doe',
          serviceType: 'Tratamento de coluna',
          state: appointmentState,
          description:
            'Lorem ipsum dolor sit amet, consectur adipiscing elit. Nunc interdum aliquet risus et commodo. Ut eu scelerisque enim.',
          dateInMilli: randomDate.getTime()
        })
        appointments.push(day)
      }

      const collection = new CollectionEventsOnDay({
        month: randomDate.getMonth(),
        monthDay: randomDate.getDate(),
        year: randomDate.getFullYear(),
        events: appointments
      })
      collections.push(collection)
    }

    return collections
  }

  private static formatCalendarNumber(num: number) {
    return num > 9 ? `${num}` : `0${num}`
  }
}
