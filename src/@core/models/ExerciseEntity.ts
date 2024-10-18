import { CalendarEventEntity } from './CalendarEventEntity'

interface Props {
  name: string
  level: 'hard' | 'medium' | 'easy'
  dateInMilli: number
}

export class ExerciseEntity extends CalendarEventEntity {
  private readonly props: Props

  constructor(props: Replace<Props, { dateInMilli?: number }>) {
    super({ dateInMilli: props.dateInMilli ?? 0 })
    this.props = {
      ...props,
      dateInMilli: props.dateInMilli ?? 0
    }
  }

  get name() {
    return this.props.name
  }
  get level() {
    return this.props.level
  }
}
