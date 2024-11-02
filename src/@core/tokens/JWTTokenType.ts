import { SerializedUserEntityProps } from '@core/models/UserEntity'

export type JWTTokenType = Replace<
  Omit<SerializedUserEntityProps, 'password'>,
  { type: 'CLIENT' | 'PROFESSIONAL' }
>
