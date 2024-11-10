import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

export function createCalendarCollection<T extends CalendarEventEntity>(
  events: T[]
): CollectionEventsOnDay<T>[] {
  const collection: CollectionEventsOnDay<T>[] = []
  for (let i = 0; i < events.length; i++) {
    const date = new Date(events[i].dateInMilli)
    const rangeTime = {
      monthDay: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }

    const eventsWithSameTime = events.filter((event) => {
      const eventTime = new Date(event.dateInMilli)
      return (
        eventTime.getDate() === rangeTime.monthDay &&
        eventTime.getMonth() === rangeTime.month &&
        eventTime.getFullYear() === rangeTime.year
      )
    })

    collection.push(
      new CollectionEventsOnDay({
        ...rangeTime,
        events: eventsWithSameTime
      })
    )
  }

  return collection
}
