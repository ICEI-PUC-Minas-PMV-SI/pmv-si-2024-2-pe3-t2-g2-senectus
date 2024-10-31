import { CalendarEventEntity } from './CalendarEventEntity'
import { EntityTemplate } from './EntityTemplate'

interface ExerciseEntityProps {
  id: string
  exerciseStackId?: string
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

export type SerializedExerciseEntityProps = ExerciseEntityProps

export class ExerciseEntity
  extends CalendarEventEntity
  implements EntityTemplate<ExerciseEntity>
{
  private static nextId = 0
  private readonly props: ExerciseEntityProps

  constructor(
    props: Replace<ExerciseEntityProps, { dateInMilli?: number; id?: string }>
  ) {
    super({ dateInMilli: props.dateInMilli ?? 0 })
    this.props = {
      ...props,
      id: props.id ?? `exercise-${ExerciseEntity.nextId}`,
      dateInMilli: props.dateInMilli ?? 0
    }

    ++ExerciseEntity.nextId
  }

  clone() {
    return this.deserialize(this.serialize())
  }

  deserialize(json: string): ExerciseEntity {
    return new ExerciseEntity({ ...JSON.parse(json) })
  }

  static deserialize(json: string): ExerciseEntity {
    return ExerciseEntity.deserialize(json)
  }

  serialize() {
    return JSON.stringify(this.props)
  }

  get id() {
    return this.props.id
  }

  get exerciseStackId(): string | undefined {
    return this.props.exerciseStackId
  }

  set exerciseStackId(value: string | undefined) {
    this.props.exerciseStackId = value
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
