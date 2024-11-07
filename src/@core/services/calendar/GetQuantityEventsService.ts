import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

export class GetQuantityEventsService {
  static exec<T extends CalendarEventEntity>(
    events: CollectionEventsOnDay<T>[],
    dayInTheMonth: Date
  ) {
    const collectionOfEvents = events.find(
      (event) =>
        event.year === dayInTheMonth.getFullYear() &&
        event.month === dayInTheMonth.getMonth() &&
        event.monthDay === dayInTheMonth.getDate()
    )
    return collectionOfEvents
  }
}
