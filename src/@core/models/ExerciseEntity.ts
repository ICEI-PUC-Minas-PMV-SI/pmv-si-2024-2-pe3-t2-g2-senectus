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
    return encodeURIComponent(input.replaceAll(' ', '_').toLowerCase())
  }
  clone() {
    return new ExerciseEntity(JSON.parse(JSON.stringify(this.props)))
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

  get levelInPtBr() {
    switch (this.props.level) {
      case 'hard':
        return 'Difícil'
      case 'medium':
        return 'Médio'
      case 'easy':
        return 'Fácil'
      default:
        throw new Error('Não foi possível reconhecer nível de dificuldade!')
    }
  }
  get href(): string | undefined {
    return this.props.href
  }
  set href(input: string) {
    this.props.href = input
  }
  get durationInMilli() {
    return this.props.durationInMilli
  }
  get video() {
    return this.props.video
  }
  get image() {
    return this.props.image
  }
  get dateInMilli() {
    return this.props.dateInMilli
  }
  set dateInMilli(value: number) {
    this.props.dateInMilli = value
  }
}
