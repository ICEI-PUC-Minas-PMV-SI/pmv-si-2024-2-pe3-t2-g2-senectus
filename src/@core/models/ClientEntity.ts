import { EntityTemplate } from './EntityTemplate'
import { UserEntity, UserEntityInputProps } from './UserEntity'

interface ClientEntityProps extends UserEntityInputProps {
  totalAppointments: number
  lastAppointmentInMilli: number
  professionalIdList: string[]
}

export type ClientEntityInputProps = Replace<
  ClientEntityProps,
  { professionalIdList?: string[] }
> &
  UserEntityInputProps

export type SerializedClientEntityProps = ClientEntityProps

export class ClientEntity
  extends UserEntity
  implements EntityTemplate<ClientEntity>
{
  private props: ClientEntityProps

  constructor(props: ClientEntityInputProps) {
    super(props)
    this.props = {
      ...props,
      professionalIdList: props.professionalIdList ?? []
    }
  }

  clone() {
    return this.deserialize(this.serialize())
  }

  deserialize(json: string): ClientEntity {
    return ClientEntity.deserialize(json)
  }

  static deserialize(json: string): ClientEntity {
    return new ClientEntity({ ...JSON.parse(json) })
  }

  serialize() {
    return JSON.stringify({ ...this.props, ...this.userProps })
  }

  get professionalIdList() {
    return this.props.professionalIdList
  }
  set professionalIdList(value: string[]) {
    this.props.professionalIdList = value
  }
  get totalAppointments() {
    return this.props.totalAppointments
  }
  set totalAppointments(value: number) {
    this.props.totalAppointments = value
  }
  get lastAppointmentInMilli() {
    return this.props.lastAppointmentInMilli
  }
  set lastAppointmentInMilli(value: number) {
    this.props.lastAppointmentInMilli = value
  }
}
