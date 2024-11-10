import { EntityTemplate } from './EntityTemplate'
import { UserEntity, UserEntityInputProps } from './UserEntity'

interface ClientEntityProps extends UserEntityInputProps {
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
    const data: SerializedClientEntityProps = {
      type: this.props.type,
      id: this.userProps.id ?? this.props.id,
      name: this.userProps.name,
      email: this.userProps.email,
      password: this.userProps.password,
      createdAtInMilli: this.userProps.createdAtInMilli,
      phoneNumber: this.userProps.phoneNumber,
      city: this.userProps.city,
      state: this.userProps.state,
      address: this.userProps.address,
      professionalIdList: this.props.professionalIdList
    }
    return JSON.stringify(data)
  }

  get location() {
    if (!this.userProps.address || !this.userProps.city) return
    return `${this.userProps.address} - ${this.userProps.city}`
  }
  get professionalIdList() {
    return this.props.professionalIdList
  }
  set professionalIdList(value: string[]) {
    this.props.professionalIdList = value
  }
}
