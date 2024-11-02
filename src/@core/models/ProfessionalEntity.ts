import { EntityTemplate } from './EntityTemplate'
import { UserEntity, UserEntityInputProps } from './UserEntity'

type ServiceProps = Array<{
  name: string
  price: number
}>

interface ProfessionalEntityProps extends UserEntityInputProps {
  job?: string
  startedAtInMilli?: number
  services: ServiceProps
  clientIdList: string[]
}

export type ProfessionalEntityInputProps = Replace<
  ProfessionalEntityProps,
  {
    clientIdList?: string[]
    startedAtInMilli?: number
    role?: string
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
  set job(value: string | undefined) {
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
  set services(value: ServiceProps) {
    this.props.services = value
  }
}
