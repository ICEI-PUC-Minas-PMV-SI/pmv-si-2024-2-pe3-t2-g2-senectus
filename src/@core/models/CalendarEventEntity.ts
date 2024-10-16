interface CalendarEventEntityProps {
  dateInMilli: number
}

export abstract class CalendarEventEntity {
  private readonly _props: CalendarEventEntityProps

  constructor(props: CalendarEventEntityProps) {
    this._props = props
  }

  get dateInMilli(): number {
    return this._props.dateInMilli
  }
}
