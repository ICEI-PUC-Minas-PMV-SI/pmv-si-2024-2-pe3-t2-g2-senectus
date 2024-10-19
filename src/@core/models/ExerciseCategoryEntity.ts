import { ExerciseEntity } from './ExerciseEntity'

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

export class ExerciseCategoryEntity {
  private props: ExerciseCategoryEntityProps
  constructor(
    props: Replace<ExerciseCategoryEntityProps, { id?: string; href?: string }>
  ) {
    const id = props.id ?? this.makeUrlFriend(props.name)
    const href = props.href ?? `/exercises/${props.id}`
    this.props = { ...props, id, href }
    this.props.exercises.forEach((item) => {
      item.href = `${this.props.href}/${item.id}`
    })
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
