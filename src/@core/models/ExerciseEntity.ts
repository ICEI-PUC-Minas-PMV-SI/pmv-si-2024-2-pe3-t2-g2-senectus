import { CalendarEventEntity } from './CalendarEventEntity'

interface Props {
  id: string
  name: string
  level: 'hard' | 'medium' | 'easy'
  instructions: string[]
  href?: string
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

  constructor(props: Replace<Props, { dateInMilli?: number; id?: string }>) {
    super({ dateInMilli: props.dateInMilli ?? 0 })
    this.props = {
      ...props,
      id: props.id ?? this.makeUrlFriend(props.name),
      dateInMilli: props.dateInMilli ?? 0
    }
  }

  private makeUrlFriend(input: string) {
    return encodeURIComponent(input.replaceAll(' ', '_'))
  }

  get id() {
    return this.props.id
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
  get href(): string | undefined {
    return this.props.href
  }
  set href(input: string) {
    this.props.href = input
  }
  get video() {
    return this.props.video
  }
  get image() {
    return this.props.image
  }
}
