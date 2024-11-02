import { ClientEntity } from '@core/models/ClientEntity'
import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'

interface UserCollection {
  users: string[]
}

export class UsersRepo {
  private static professionalDeserializer = ProfessionalEntity.deserialize
  private static clientDeserializer = ClientEntity.deserialize

  static set(user: UserEntity) {
    const users = UsersRepo.getSource(user.type)
    if (users.length <= 0) {
      const collection: UserCollection = { users: [user.serialize()] }
      return localStorage.setItem(
        user.type.toLowerCase(),
        JSON.stringify(collection)
      )
    }

    const searchedUserIndex = users.findIndex((item) => item.id === user.id)
    if (searchedUserIndex >= 0) users[searchedUserIndex] = user
    else users.push(user)

    const serializedUsers = users.map((item) => item.serialize())
    const collection: UserCollection = { users: serializedUsers }
    localStorage.setItem(user.type.toLowerCase(), JSON.stringify(collection))
  }

  static deleteById(id: string, type: UserEntityTypeEnum) {
    const users = UsersRepo.getSource(type)
    if (users.length <= 0) return

    const searchedUserIndex = users.findIndex((item) => item.id === id)
    if (!searchedUserIndex) return

    users.splice(searchedUserIndex, 1)

    const serializedUsers = users.map((item) => item.serialize())
    const collection: UserCollection = { users: serializedUsers }
    localStorage.setItem(type.toLowerCase(), JSON.stringify(collection))
  }

  static findById(
    id: string,
    type: UserEntityTypeEnum
  ): UserEntity | undefined {
    const users = UsersRepo.getSource(type)
    if (users.length <= 0) return

    const searchedUser = users.find((item) => item.id === id)
    return searchedUser ?? undefined
  }

  static findByIdWithoutType(id: string): UserEntity | undefined {
    const professionals = UsersRepo.getSource(UserEntityTypeEnum.PROFESSIONAL)
    const clients = UsersRepo.getSource(UserEntityTypeEnum.CLIENT)
    if (professionals.length <= 0 && clients.length <= 0) return

    const users: UserEntity[] = [...professionals, ...clients]
    const searchedUser = users.find((item) => item.id === id)
    return searchedUser ?? undefined
  }

  static findByEmailWithoutType(email: string): UserEntity | undefined {
    const professionals = UsersRepo.getSource(UserEntityTypeEnum.PROFESSIONAL)
    const clients = UsersRepo.getSource(UserEntityTypeEnum.CLIENT)
    if (professionals.length <= 0 && clients.length <= 0) return

    const users: UserEntity[] = [...professionals, ...clients]
    const searchedUser = users.find((item) => item.email === email)
    return searchedUser ?? undefined
  }

  static findByName(
    name: string,
    type: UserEntityTypeEnum
  ): UserEntity | undefined {
    const users = UsersRepo.getSource(type)
    if (users.length <= 0) return

    const searchedUser = users.find((item) => item.name === name)
    return searchedUser ?? undefined
  }

  static findByEmail(
    email: string,
    type: UserEntityTypeEnum
  ): UserEntity | undefined {
    const users = UsersRepo.getSource(type)
    if (users.length <= 0) return

    const searchedUser = users.find((item) => item.email === email)
    return searchedUser ?? undefined
  }

  static findByRegExp(key: string, type: UserEntityTypeEnum): UserEntity[] {
    const users = UsersRepo.getSource(type)
    if (users.length <= 0) return []

    const regexp = new RegExp(key, 'i')
    const matches: UserEntity[] = []

    for (let i = 0; i < users.length; i++) {
      const item = users[i]
      if (
        regexp.test(item.name) ||
        regexp.test(item.email) ||
        (item.phoneNumber && regexp.test(item.phoneNumber)) ||
        (item.city && regexp.test(item.city)) ||
        (item.state && regexp.test(item.state)) ||
        (item.address && regexp.test(item.address))
      ) {
        matches.push(item)
      }
    }
    return matches ?? undefined
  }

  private static getSource(type: UserEntityTypeEnum): UserEntity[] {
    const usersSerializedCollection = localStorage.getItem(type.toLowerCase())
    if (!usersSerializedCollection) return []

    const usersJsonCol: UserCollection = JSON.parse(usersSerializedCollection)
    const users: UserEntity[] = usersJsonCol.users.map((item) =>
      UsersRepo.deserialize(item, type)
    )
    return users
  }

  private static deserialize(json: string, type: UserEntityTypeEnum) {
    return type === 'PROFESSIONAL'
      ? UsersRepo.professionalDeserializer(json)
      : UsersRepo.clientDeserializer(json)
  }
}
