import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import { FaCity, FaEnvelope, FaPhone, FaRoad, FaTag } from 'react-icons/fa6'
import { Container, FullWidthContainer, Grid } from './ConfigurationFormStyle'
import { ChangeEvent, useEffect, useState } from 'react'
import { AppSelectOutline } from '@components/common/Selects/AppSelectOutline'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { FormatPhoneNumber } from '@core/utils/FormatPhoneNumber'
import { UpdateUserService } from '@core/services/users/UpdateUserService'
import { ValidateUpdateUserBodyService } from '@core/services/users/ValidateUpdateUserBodyService'
import { UserEntityTypeEnum } from '@core/models/UserEntity'

export interface UpdateUserForm {
  email: string
  name: string
  phone: string
  state: string
  city: string
  address: string
}

const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]

export function AppConfigurationForm() {
  const [user, setUser] = useState(GetUserInfoService.exec())
  const isProfessional = user?.type === UserEntityTypeEnum.PROFESSIONAL

  const [form, setForm] = useState<UpdateUserForm>({
    email: user?.email ?? '',
    name: user?.name ?? '',
    phone: user?.phoneNumber ?? '',
    state: user?.state ?? '',
    city: user?.city ?? '',
    address: user?.address ?? ''
  })
  const [formError, setFormError] = useState({
    email: '',
    name: '',
    phone: '',
    state: '',
    city: '',
    address: ''
  })

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form, name: e.target.value }
    setForm(newForm)

    const res = ValidateUpdateUserBodyService.exec(user!, newForm)
    if (res.isError && Boolean(res.name))
      setFormError((prev) => ({ ...prev, name: res.name }))
    else setFormError((prev) => ({ ...prev, name: '' }))
  }

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = FormatPhoneNumber.format(e.target.value)
    const newForm = { ...form, phone: phoneNumber }
    setForm(newForm)

    const res = ValidateUpdateUserBodyService.exec(user!, newForm)
    if (res.isError && Boolean(res.phone))
      setFormError((prev) => ({ ...prev, phone: res.phone }))
    else setFormError((prev) => ({ ...prev, phone: '' }))
  }

  const onChangeState = (value: string) => {
    const newForm = { ...form, state: value }
    setForm(newForm)

    const res = ValidateUpdateUserBodyService.exec(user!, newForm)
    if (res.isError && Boolean(res.state))
      setFormError((prev) => ({ ...prev, state: res.state }))
    else setFormError((prev) => ({ ...prev, state: '' }))
  }

  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form, city: e.target.value }
    setForm(newForm)

    const res = ValidateUpdateUserBodyService.exec(user!, newForm)
    if (res.isError && Boolean(res.city))
      setFormError((prev) => ({ ...prev, city: res.city }))
    else setFormError((prev) => ({ ...prev, city: '' }))
  }

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form, address: e.target.value }
    setForm(newForm)

    const res = ValidateUpdateUserBodyService.exec(user!, newForm)
    if (res.isError && Boolean(res.address))
      setFormError((prev) => ({ ...prev, address: res.address }))
    else setFormError((prev) => ({ ...prev, address: '' }))
  }

  useEffect(() => {
    const user = GetUserInfoService.exec()
    setUser(user)

    if (
      Boolean(formError.email) ||
      Boolean(formError.name) ||
      Boolean(formError.state) ||
      Boolean(formError.city) ||
      Boolean(formError.phone) ||
      Boolean(formError.address)
    )
      return

    const timer = setTimeout(() => {
      if (!user) throw new Error('Não foi possível encontrar a sua conta')

      user.name = form.name
      user.phoneNumber = form.phone
      user.state = form.state
      user.city = form.city
      user.address = form.address
      UpdateUserService.exec(user)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [form, setForm])

  return (
    <Container>
      <Grid>
        <FullWidthContainer>
          <AppDefaultInput
            style={{ height: '100%' }}
            wrapperStyle={{ height: '100%' }}
            label="Insira seu nome completo"
            icon={<FaTag />}
            value={form.name}
            onChange={onChangeName}
            isRequired
            isInvalid={Boolean(formError.name)}
            errorMessage={formError.name}
          />
        </FullWidthContainer>

        <AppDefaultInput
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          label="Insira seu telefone"
          icon={<FaPhone />}
          value={form.phone}
          onChange={onChangePhoneNumber}
          isRequired={isProfessional}
          isInvalid={Boolean(formError.phone)}
          errorMessage={formError.phone}
        />

        <AppDefaultInput
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          label="Insira seu email"
          icon={<FaEnvelope />}
          value={form.email}
          isReadOnly
        />

        <AppSelectOutline
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          label="Insira seu estado"
          icon={<FaCity />}
          options={states}
          value={form.state}
          isRequired={isProfessional}
          onChange={onChangeState}
          isInvalid={Boolean(formError.state)}
          errorMessage={formError.state}
        />

        <AppDefaultInput
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          label="Insira sua cidade"
          icon={<FaCity />}
          value={form.city}
          validationBehavior="native"
          isRequired={isProfessional}
          onChange={onChangeCity}
          isInvalid={Boolean(formError.city)}
          errorMessage={formError.city}
        />

        <FullWidthContainer>
          <AppDefaultInput
            style={{ height: '100%' }}
            wrapperStyle={{ height: '100%' }}
            label="Insira seu endereço"
            icon={<FaRoad />}
            value={form.address}
            isRequired={isProfessional}
            onChange={onChangeAddress}
            isInvalid={Boolean(formError.address)}
            errorMessage={formError.address}
          />
        </FullWidthContainer>
      </Grid>
    </Container>
  )
}
