import { EntityTemplate } from './EntityTemplate'
import { ExerciseEntity, SerializedExerciseEntityProps } from './ExerciseEntity'
import { v4 as uuid } from 'uuid'

interface ExerciseStackEntityProps {
  id: string
  dateInMilliList: number[]
  exercises: ExerciseEntity[]
}

export type SerializedExerciseStackEntityProps = Replace<
  ExerciseStackEntityProps,
  { exercises: SerializedExerciseEntityProps[] }
>

export class ExerciseStackEntity
  implements EntityTemplate<ExerciseStackEntity>
{
  private props: ExerciseStackEntityProps

  constructor(props: Replace<ExerciseStackEntityProps, { id?: string }>) {
    this.props = {
      ...props,
      id: props.id ?? uuid()
    }
  }

  clone() {
    const exercises = this.props.exercises.map((item) => item.clone())
    return new ExerciseStackEntity({
      id: this.props.id,
      dateInMilliList: [...this.props.dateInMilliList],
      exercises: exercises
    })
  }

  serialize(): string {
    const exercises = this.props.exercises.map((item) =>
      JSON.parse(item.serialize())
    )
    return JSON.stringify({ ...this.props, exercises })
  }

  deserialize(json: string): ExerciseStackEntity {
    return ExerciseStackEntity.deserialize(json)
  }
  static deserialize(json: string): ExerciseStackEntity {
    const objt: SerializedExerciseStackEntityProps = JSON.parse(json)
    const exercises = objt.exercises.map((item) => new ExerciseEntity(item))
    return new ExerciseStackEntity({ ...objt, exercises })
  }

  get id() {
    return this.props.id
  }
  get dateInMilliList() {
    return this.props.dateInMilliList
  }
  set dateInMilliList(value: number[]) {
    this.props.dateInMilliList = value
  }

  get exercises() {
    return this.props.exercises
  }
  set exercises(value: ExerciseEntity[]) {
    this.props.exercises = value
  }
}
