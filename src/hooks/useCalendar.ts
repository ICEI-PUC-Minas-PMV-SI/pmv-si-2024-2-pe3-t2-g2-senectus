import { useState } from 'react'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

export function useCalendar<T extends CalendarEventEntity>() {
  return useState<CollectionEventsOnDay<T>[]>([])
}
