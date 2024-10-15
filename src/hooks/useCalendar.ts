import { useState } from 'react'
import { AVLTree } from 'dead-tree'
import { CollectionEventsOnDayComparator } from '@utils/comparators/CalendarDayComparator'
import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

export function useCalendar<T extends CalendarEventEntity>() {
  return useState(
    new AVLTree<CollectionEventsOnDay<T>>({
      comparator: new CollectionEventsOnDayComparator(),
      behavior: 'in-order'
    })
  )
}
