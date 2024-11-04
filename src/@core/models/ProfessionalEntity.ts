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
    return JSON.stringify({ ...this.props, ...this.userProps })
  }

  get job(): string | undefined {
    return this.props.job
  }
  set job(value: JobConstant | undefined) {
    this.props.job = value
  }
  get startedAtInMilli() {
    return this.props.startedAtInMilli
  }
  set startAtInMilli(value: number) {
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
