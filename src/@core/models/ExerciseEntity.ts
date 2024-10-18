import { CalendarEventEntity } from './CalendarEventEntity'

interface Props {
  id: string
  name: string
  level: 'hard' | 'medium' | 'easy'
  href: string
  dateInMilli: number
  image: {
    src: string
    alt: string
  }
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
  get href() {
    return this.props.href
  }
  get image() {
    return this.props.image
  }
}
