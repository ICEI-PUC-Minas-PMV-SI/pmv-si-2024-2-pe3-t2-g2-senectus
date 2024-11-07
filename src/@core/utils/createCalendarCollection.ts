import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { getDaysInMonth } from 'date-fns'

export function createCalendarCollection<T extends CalendarEventEntity>(
  events: T[]
): CollectionEventsOnDay<T>[] {
  const now = Date.now()

  const collection: CollectionEventsOnDay<T>[] = []
  for (let day = 1; day <= getDaysInMonth(now); ++day)
    collection.push(
      new CollectionEventsOnDay({
        monthDay: day,
        events: []
      })
    )

  const eventsPerDay: Record<string, T[]> = {}
  events.forEach((item) => {
    const date = new Date(item.dateInMilli)
    const monthDay = date.getDate()
    if (eventsPerDay[monthDay]) eventsPerDay[monthDay].push(item)
    else eventsPerDay[monthDay] = [item]
  })

  for (const key in eventsPerDay) {
    const events = eventsPerDay[key]
    collection[parseInt(key) - 1].events = events
  }

  return collection
}
