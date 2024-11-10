import { ClientEntity, ClientEntityInputProps } from '@core/models/ClientEntity'
import {
  ProfessionalEntity,
  ProfessionalEntityInputProps
} from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

type UserEntityFactoryProps =
  | ({
      type: UserEntityTypeEnum
    } & ProfessionalEntityInputProps)
  | ClientEntityInputProps

export function userEntityFactory(props: UserEntityFactoryProps) {
  if (props.type === 'CLIENT')
    return new ClientEntity(props as ClientEntityInputProps)
  return new ProfessionalEntity(props as ProfessionalEntityInputProps)
}
