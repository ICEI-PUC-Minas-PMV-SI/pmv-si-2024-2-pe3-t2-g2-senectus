import { CalendarEventEntity } from './CalendarEventEntity'

interface CollectionEventsOnDayProps<T extends CalendarEventEntity> {
  monthDay: number
  year: number
  month: number
  events: T[]
}

type InputProps<T extends CalendarEventEntity> = Replace<
  CollectionEventsOnDayProps<T>,
  { events?: T[] }
>

export class CollectionEventsOnDay<T extends CalendarEventEntity> {
  private readonly props: CollectionEventsOnDayProps<T>

  constructor(props: InputProps<T>) {
    const events = props?.events ?? []

    events.filter((item) => {
      const date = new Date(item.dateInMilli)
      if (
        date.getDate() !== props.monthDay ||
        date.getMonth() !== props.month ||
        date.getFullYear() !== props.year
      ) {
        throw new Error(
          'CollectionEventsOnDay deve ter eventos correspondentes ao mesmo dia, mês e ano'
        )
      }
      return true
    })
    this.props = { ...props, events }
  }

  get events() {
    return this.props.events
  }
  set events(value: T[]) {
    this.props.events = value
  }
  get monthDay() {
    return this.props.monthDay
  }
  get month() {
    return this.props.month
  }
  get year() {
    return this.props.year
  }
}
