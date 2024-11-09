import {
  ExerciseStackEntity,
  SerializedExerciseStackEntityProps
} from './ExerciseStackEntity'
import { EntityTemplate } from './EntityTemplate'
import { ExerciseEntity, SerializedExerciseEntityProps } from './ExerciseEntity'
import { v4 as uuid } from 'uuid'

export interface TrainingPlanExercise {
  inMemoryPath: string
  content: ExerciseEntity
}

interface TrainingPlanEntityProps {
  id: string
  client: string
  owner: string
  progress: number
  stackHolderRef?: ExerciseStackEntity // referência da pilha de exercícios que está sendo modificada na criação do plano
  exerciseStacks: ExerciseStackEntity[] // pilha de referência de exercícios armazenados em memória focada em facilitar o processo de edição
  exerciseList: TrainingPlanExercise[]
  createdAtInMilli: number
}

export type SerializedTrainingPlanEntityProps = Replace<
  TrainingPlanEntity,
  {
    stackHolderRef?: SerializedExerciseStackEntityProps
    exerciseStacks: SerializedExerciseStackEntityProps[]
    exerciseList: Array<{
      inMemoryPath: string
      content: SerializedExerciseEntityProps
    }>
  }
>

export type TrainingPlanEntityInputProps = Replace<
  TrainingPlanEntityProps,
  {
    id?: string
    progress?: number
    createdAtInMilli?: number
    exerciseList?: TrainingPlanExercise[]
  }
>

export class TrainingPlanEntity implements EntityTemplate<TrainingPlanEntity> {
  private props: TrainingPlanEntityProps

  constructor(props: TrainingPlanEntityInputProps) {
    this.props = {
      ...props,
      id: props.id ?? uuid(),
      progress: props.progress ?? 0,
      exerciseList: props.exerciseList ?? [],
      createdAtInMilli: props.createdAtInMilli ?? Date.now()
    }
  }

  clone(): TrainingPlanEntity {
    return this.deserialize(this.serialize())
  }

  serialize(): string {
    const exerciseList = this.props.exerciseList.map((item) => {
      const exercise = JSON.parse(item.content.serialize())
      return JSON.parse(
        JSON.stringify({
          inMemoryPath: item.inMemoryPath,
          content: exercise
        })
      )
    })
    const exerciseStacks = this.props.exerciseStacks.map((item) =>
      JSON.parse(item.serialize())
    )
    const stackHolderRef = this.props.stackHolderRef
      ? JSON.parse(this.props.stackHolderRef.serialize())
      : undefined

    return JSON.stringify({
      ...this.props,
      stackHolderRef,
      exerciseStacks,
      exerciseList
    })
  }

  deserialize(json: string): TrainingPlanEntity {
    return TrainingPlanEntity.deserialize(json)
  }
  static deserialize(json: string): TrainingPlanEntity {
    const objt: SerializedTrainingPlanEntityProps = JSON.parse(json)
    const exerciseList = objt.exerciseList.map((item) => {
      const exercise = new ExerciseEntity(item.content)
      return { inMemoryPath: item.inMemoryPath, content: exercise }
    })
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

    return new TrainingPlanEntity({
      ...objt,
      stackHolderRef,
      exerciseStacks,
      exerciseList
    })
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

  get progress() {
    return this.props.progress
  }
  set progress(value: number) {
    this.props.progress = value
  }

  get stackHolderRef(): ExerciseStackEntity | undefined {
    return this.props.stackHolderRef
  }
  set stackHolderRef(value: ExerciseStackEntity | undefined) {
    this.props.stackHolderRef = value
  }

  get exerciseList() {
    return this.props.exerciseList
  }
  set exerciseList(value: TrainingPlanExercise[]) {
    this.props.exerciseList = value
  }

  get createdAtInMilli() {
    return this.props.createdAtInMilli
  }
  set createdAtInMilli(value: number) {
    this.props.createdAtInMilli = value
  }

  get exerciseStacks() {
    return this.props.exerciseStacks
  }
}
