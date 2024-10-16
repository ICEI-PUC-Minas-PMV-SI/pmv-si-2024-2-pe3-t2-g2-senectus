import { CalendarEventEntity } from './CalendarEventEntity'

interface CollectionEventsOnDayProps<T extends CalendarEventEntity> {
  monthDay: number
  events: T[]
}

type InputProps<T extends CalendarEventEntity> = Replace<
  CollectionEventsOnDayProps<T>,
  { events?: T[] }
>

export class CollectionEventsOnDay<T extends CalendarEventEntity> {
  private readonly props: CollectionEventsOnDayProps<T>

  constructor(props: InputProps<T>) {
    props?.events?.filter((item) => {
      if (new Date(item.dateInMilli).getDate() !== props.monthDay) {
        throw new Error(
          'CollectionEventsOnDay deve ter eventos correspondentes ao mesmo dia do mesmo'
        )
      }
      return true
    })
    this.props = {
      monthDay: props.monthDay,
      events: props.events ?? []
    }
  }

  get events() {
    return this.props.events
  }
  get monthDay() {
    return this.props.monthDay
  }
}
