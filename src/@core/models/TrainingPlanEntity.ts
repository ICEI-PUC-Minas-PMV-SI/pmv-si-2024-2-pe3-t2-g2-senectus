import {
  ExerciseStackEntity,
  SerializedExerciseStackEntityProps
} from './ExerciseStackEntity'
import { EntityTemplate } from './EntityTemplate'
import { ExerciseEntity } from './ExerciseEntity'

interface TrainingPlanEntityProps {
  id: string
  client: string
  owner: string
  stackHolderRef?: ExerciseStackEntity // referência da pilha de exercícios que está sendo modificada na criação do plano
  exerciseStacks: ExerciseStackEntity[]
}

export type SerializedTrainingPlanEntityProps = Replace<
  TrainingPlanEntity,
  {
    stackHolderRef?: SerializedExerciseStackEntityProps
    exerciseStacks: SerializedExerciseStackEntityProps[]
  }
>

export class TrainingPlanEntity implements EntityTemplate<TrainingPlanEntity> {
  private static nextId = 0
  private props: TrainingPlanEntityProps

  constructor(props: Replace<TrainingPlanEntityProps, { id?: string }>) {
    this.props = {
      ...props,
      id: props.id ?? `training-plan-${TrainingPlanEntity.nextId}`
    }
    ++TrainingPlanEntity.nextId
  }

  clone() {
    const stackHolderRef = this.props.stackHolderRef?.clone()
    const exerciseStacks = this.props.exerciseStacks.map((item) => item.clone())
    return new TrainingPlanEntity({
      id: this.props.id,
      client: this.props.client,
      owner: this.props.owner,
      stackHolderRef,
      exerciseStacks
    })
  }

  serialize(): string {
    const exerciseStacks = this.props.exerciseStacks.map((item) =>
      JSON.parse(item.serialize())
    )
    const stackHolderRef = this.props.stackHolderRef
      ? JSON.parse(this.props.stackHolderRef.serialize())
      : undefined

    return JSON.stringify({ ...this.props, stackHolderRef, exerciseStacks })
  }

  deserialize(json: string): TrainingPlanEntity {
    return TrainingPlanEntity.deserialize(json)
  }
  static deserialize(json: string): TrainingPlanEntity {
    const objt: SerializedTrainingPlanEntityProps = JSON.parse(json)
    const exerciseStacks = objt.exerciseStacks.map((item) => {
      const exercises = item.exercises.map((props) => new ExerciseEntity(props))
      return new ExerciseStackEntity({ ...item, exercises })
    })
    let stackHolderRef: ExerciseStackEntity | undefined
    if (objt.stackHolderRef) {
      const exercises = objt.stackHolderRef.exercises.map(
        (props) => new ExerciseEntity(props)
      )
      stackHolderRef = new ExerciseStackEntity({
        ...objt.stackHolderRef,
        exercises
      })
    }

    return new TrainingPlanEntity({ ...objt, stackHolderRef, exerciseStacks })
  }

  get id() {
    return this.props.id
  }
  get client() {
    return this.props.client
  }
  set client(value: string) {
    this.props.client = value
  }

  get owner() {
    return this.props.owner
  }
  set owner(value: string) {
    this.props.owner = value
  }

  get stackHolderRef(): ExerciseStackEntity | undefined {
    return this.props.stackHolderRef
  }
  set stackHolderRef(value: ExerciseStackEntity | undefined) {
    this.props.stackHolderRef = value
  }

  get exerciseStacks() {
    return this.props.exerciseStacks
  }
}