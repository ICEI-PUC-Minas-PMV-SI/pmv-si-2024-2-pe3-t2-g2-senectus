import { CalendarEventEntity } from '@core/models/CalendarEventEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { IComparator } from 'dead-tree'

export class CollectionEventsOnDayComparator<T extends CalendarEventEntity>
  implements IComparator<CollectionEventsOnDay<T>>
{
  compare(
    c1: CollectionEventsOnDay<T>,
    c2: CollectionEventsOnDay<T>
  ): 0 | 1 | -1 {
    if (c1.monthDay > c2.monthDay) return 1
    if (c1.monthDay < c2.monthDay) return -1
    return 0
  }
}
