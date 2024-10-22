interface ClientsEntityProps {
  name: string
  conclusionRate: number
  createdAt: Date
}

export class ClientsEntity {
  private props: ClientsEntityProps

  constructor(props: Replace<ClientsEntityProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
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
