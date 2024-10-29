import { EntityTemplate } from './EntityTemplate'

interface ClientEntityProps {
  id: string
  name: string
  conclusionRate: number
  totalAppointments: number
  lastAppointmentInMilli: number
  createdAtInMilli: number
}

export class ClientEntity implements EntityTemplate<ClientEntity> {
  private static nextId = 0
  private props: ClientEntityProps

  constructor(
    props: Replace<
      ClientEntityProps,
      { createdAtInMilli?: number; id?: string }
    >
  ) {
    this.props = {
      ...props,
      id: props.id ?? `client-${ClientEntity.nextId}`,
      createdAtInMilli: props.createdAtInMilli ?? Date.now()
    }
    ++ClientEntity.nextId
  }

  clone() {
    return this.deserialize(this.serialize())
  }

  deserialize(json: string): ClientEntity {
    return ClientEntity.deserialize(json)
  }

  static deserialize(json: string): ClientEntity {
    return new ClientEntity(JSON.parse(json))
  }

  serialize() {
    return JSON.stringify(this.props)
  }

  get id() {
    return this.props.id
  }
  get name() {
    return this.props.name
  }
  get totalAppointments() {
    return this.props.totalAppointments
  }
  get lastAppointmentInMilli() {
    return this.props.lastAppointmentInMilli
  }
  get conclusionRate() {
    return this.props.conclusionRate
  }
  get createdAtInMilli() {
    return this.props.createdAtInMilli
  }
}
