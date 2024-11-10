import { z } from 'zod'
import professionalsDb from '@public/inMemoryDb/professionals.json'
import { userEntityFactory } from '@core/factories/userEntityFactory'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import {
  JobConstant,
  ProfessionalEntity
} from '@core/models/ProfessionalEntity'
import { UsersRepo } from '@core/repositories/UsersRepo'

export class ProfessionalListSeed {
  private static _staticProfessionals: ProfessionalEntity[] = []

  static exec() {
    const schema = z.object({
      professionals: z.array(
        z.object({
          id: z.string(),
          role: z.union([
            z.literal('Personal Trainer'),
            z.literal('Nutricionista'),
            z.literal('Quiroprata'),
            z.literal('Fisioterapeuta'),
            z.literal('Nutricionista')
          ]),
          name: z.string(),
          email: z.string(),
          phone: z.string(),
          city: z.string(),
          state: z.string(),
          streetAddress: z.string(),
          services: z.array(
            z.object({
              name: z.string(),
              price: z.number()
            })
          )
        })
      )
    })

    const res = schema.parse(professionalsDb)
    const professionals: ProfessionalEntity[] = res.professionals.map(
      (item) =>
        userEntityFactory({
          type: UserEntityTypeEnum.PROFESSIONAL,
          id: item.id,
          name: item.name,
          email: item.email,
          password: '123456',
          phoneNumber: item.phone,
          city: item.city,
          state: item.state,
          job: item.role as JobConstant,
          services: item.services,
          address: item.streetAddress
        }) as ProfessionalEntity
    )

    ProfessionalListSeed._staticProfessionals = professionals
    if (window) professionals.forEach(UsersRepo.set)
  }

  static get staticProfessionals() {
    return ProfessionalListSeed._staticProfessionals
  }
}
