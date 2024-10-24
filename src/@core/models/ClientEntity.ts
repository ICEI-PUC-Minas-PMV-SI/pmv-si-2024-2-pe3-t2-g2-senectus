interface ClientEntityProps {
  id: string
  name: string
  conclusionRate: number
  createdAt: Date
}

import { v4 as uuid } from 'uuid'

export class ClientEntity {
  private props: ClientEntityProps

  constructor(
    props: Replace<ClientEntityProps, { createdAt?: Date; id?: string }>
  ) {
    this.props = {
      ...props,
      id: props.id ?? uuid(),
      createdAt: props.createdAt ?? new Date()
    }
  }

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get conclusionRate() {
    return this.props.conclusionRate
  }
  get createdAt() {
    return this.props.createdAt
  }
}
