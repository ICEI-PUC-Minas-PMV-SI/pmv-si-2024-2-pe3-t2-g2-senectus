import { EntityTemplate } from './EntityTemplate'
import { UserEntity, UserEntityInputProps } from './UserEntity'

export type ServiceProps = Array<{
  name: string
  price: number
}>

export type JobConstant =
  | 'Personal Trainer'
  | 'Nutricionista'
  | 'Quiroprata'
  | 'Fisioterapeuta'
  | 'Nutricionista'
interface ProfessionalEntityProps extends UserEntityInputProps {
  job?: JobConstant
  startedAtInMilli?: number
  services: ServiceProps
  clientIdList: string[]
}

export type ProfessionalEntityInputProps = Replace<
  ProfessionalEntityProps,
  {
    clientIdList?: string[]
    startedAtInMilli?: number
    job?: JobConstant
    services?: ServiceProps
  }
> &
  UserEntityInputProps

export type SerializedProfessionalEntityProps = ProfessionalEntityProps

export class ProfessionalEntity
  extends UserEntity
  implements EntityTemplate<ProfessionalEntity>
{
  private props: ProfessionalEntityProps

  constructor(props: ProfessionalEntityInputProps) {
    super(props)
    this.props = {
      ...props,
      clientIdList: props.clientIdList ?? [],
      services: props.services ?? []
    }
  }

  clone() {
    return this.deserialize(this.serialize())
  }

  deserialize(json: string): ProfessionalEntity {
    return ProfessionalEntity.deserialize(json)
  }

  static deserialize(json: string): ProfessionalEntity {
    return new ProfessionalEntity(JSON.parse(json))
  }

  serialize() {
    const data: SerializedProfessionalEntityProps = {
      type: this.props.type,
      id: this.props.id ?? this.userProps.id,
      name: this.userProps.name,
      email: this.userProps.email,
      password: this.userProps.password,
      createdAtInMilli: this.userProps.createdAtInMilli,
      phoneNumber: this.userProps.phoneNumber,
      city: this.userProps.city,
      state: this.userProps.state,
      address: this.userProps.address,
      job: this.props.job,
      startedAtInMilli: this.props.startedAtInMilli,
      services: this.props.services,
      clientIdList: this.props.clientIdList
    }
    return JSON.stringify(data)
  }

  get job(): string | undefined {
    return this.props.job
  }
  set job(value: JobConstant | undefined) {
    this.props.job = value
  }
  get startedAtInMilli(): number | undefined {
    return this.props.startedAtInMilli
  }
  set startedAtInMilli(value: number) {
    this.props.startedAtInMilli = value
  }
  get clientIdList() {
    return this.props.clientIdList
  }
  set clientIdList(value: string[]) {
    this.props.clientIdList = value
  }
  get services() {
    return this.props.services
  }
  get location() {
    return `${this.userProps.address} - ${this.userProps.city}`
  }
  set services(value: ServiceProps) {
    this.props.services = value
  }
}
