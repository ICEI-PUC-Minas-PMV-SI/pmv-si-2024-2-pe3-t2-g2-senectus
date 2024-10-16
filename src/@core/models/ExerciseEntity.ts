import { CalendarEventEntity } from './CalendarEventEntity'

interface Props {
  name: string
  level: 'hard' | 'medium' | 'easy'
  dateInMilli: number
}

export class ExerciseEntity extends CalendarEventEntity {
  private readonly props: Props

  constructor(props: Props) {
    super({ dateInMilli: props.dateInMilli })
    this.props = props
  }

  get name() {
    return this.props.name
  }
  get level() {
    return this.props.level
  }
}
