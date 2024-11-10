import { makeUrlFriend } from '@core/utils/makeUrlFriend'
import { ExerciseEntity, SerializedExerciseEntityProps } from './ExerciseEntity'
import { EntityTemplate } from './EntityTemplate'

interface ExerciseCategoryEntityProps {
  id: string
  name: string
  href: string
  image: {
    src: string
    alt: string
  }
  exercises: ExerciseEntity[]
}

export type SerializedExerciseCategoryEntityProps = Replace<
  ExerciseCategoryEntityProps,
  { exercises: SerializedExerciseEntityProps[] }
>

export class ExerciseCategoryEntity
  implements EntityTemplate<ExerciseCategoryEntity>
{
  private props: ExerciseCategoryEntityProps
  constructor(
    props: Replace<ExerciseCategoryEntityProps, { id?: string; href?: string }>
  ) {
    const id = props.id ?? makeUrlFriend(props.name)
    const href = props.href ?? `/exercises/${id}`
    this.props = { ...props, id, href }
    this.props.exercises.forEach((item) => {
      item.href = `${this.props.href}/${item.id}`
    })
  }

  clone() {
    const exercises = this.exercises.map((item) => item.clone())
    return new ExerciseCategoryEntity({
      ...this.props,
      image: { ...this.image },
      exercises
    })
  }

  deserialize(json: string): ExerciseCategoryEntity {
    return ExerciseCategoryEntity.deserialize(json)
  }

  static deserialize(json: string) {
    const objt: SerializedExerciseCategoryEntityProps = JSON.parse(json)
    const exercises = objt.exercises.map((item) => new ExerciseEntity(item))
    return new ExerciseCategoryEntity({ ...objt, exercises })
  }

  serialize() {
    const exercises = this.exercises.map((item) => JSON.parse(item.serialize()))
    return JSON.stringify({ ...this.props, exercises })
  }

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get href() {
    return this.props.href
  }
  get image() {
    return this.props.image
  }
  get exercises() {
    return this.props.exercises
  }
}
