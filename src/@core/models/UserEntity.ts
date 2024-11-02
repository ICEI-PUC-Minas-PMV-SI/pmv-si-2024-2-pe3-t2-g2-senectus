import { EntityTemplate } from './EntityTemplate'
import { v4 as uuid } from 'uuid'

export enum UserEntityTypeEnum {
  CLIENT = 'CLIENT',
  PROFESSIONAL = 'PROFESSIONAL'
}

interface UserEntityProps {
  type: UserEntityTypeEnum
  id: string
  name: string
  email: string
  password: string
  createdAtInMilli: number
  phoneNumber?: string
  city?: string
  state?: string
  address?: string
}

export type UserEntityInputProps = Replace<
  UserEntityProps,
  {
    id?: string
    createdAtInMilli?: number
  }
>

export type SerializedUserEntityProps = UserEntityProps

export abstract class UserEntity implements EntityTemplate<UserEntity> {
  private _props: UserEntityProps
  constructor(props: UserEntityInputProps) {
    this._props = {
      ...props,
      id: props.id ?? uuid(),
      createdAtInMilli: props.createdAtInMilli ?? Date.now()
    }
    props.id = this._props.id
    props.createdAtInMilli = this._props.createdAtInMilli
  }

  abstract clone(): UserEntity
  abstract serialize(): string
  abstract deserialize(json: string): UserEntity

  get userProps() {
    return this._props
  }
  get type() {
    return this._props.type
  }
  get id() {
    return this._props.id
  }
  get name() {
    return this._props.name
  }
  set name(value: string) {
    this._props.name = value
  }
  get email() {
    return this._props.email
  }
  set email(value: string) {
    this._props.email = value
  }
  get password() {
    return this._props.password
  }
  set password(value: string) {
    this._props.password = value
  }
  get createdAtInMilli() {
    return this._props.createdAtInMilli
  }
  set createdAtInMilli(value: number) {
    this._props.createdAtInMilli = value
  }
  get phoneNumber(): string | undefined {
    return this._props.phoneNumber
  }
  set phoneNumber(value: string | undefined) {
    this._props.phoneNumber = value
  }
  get city(): string | undefined {
    return this._props.city
  }
  set city(value: string | undefined) {
    this._props.city = value
  }
  get state(): string | undefined {
    return this._props.state
  }
  set state(value: string | undefined) {
    this._props.state = value
  }
  get address(): string | undefined {
    return this._props.address
  }
  set address(value: string | undefined) {
    this._props.address = value
  }
}
