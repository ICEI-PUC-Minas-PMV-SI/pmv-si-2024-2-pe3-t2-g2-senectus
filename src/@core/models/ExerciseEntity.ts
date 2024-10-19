import { CalendarEventEntity } from './CalendarEventEntity'

interface Props {
  id: string
  name: string
  level: 'hard' | 'medium' | 'easy'
  instructions: string[]
  href: string
  dateInMilli: number
  durationInMilli: number
  video: {
    src: string
  }
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
  get instructions() {
    return this.props.instructions
  }
  get level() {
    return this.props.level
  }
  get href() {
    return this.props.href
  }
  get video() {
    return this.props.video
  }
  get image() {
    return this.props.image
  }
}
