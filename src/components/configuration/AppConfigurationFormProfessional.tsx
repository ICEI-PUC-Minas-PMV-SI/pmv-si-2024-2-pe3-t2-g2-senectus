import React, { useEffect, useState } from 'react'
import { FaBriefcaseMedical, FaRegSquarePlus } from 'react-icons/fa6'
import { Container, Grid } from './ConfigurationFormProfessional'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDatePicker } from '@components/common/Inputs/DatePicker/AppDatePicker'
import {
  JobConstant,
  ProfessionalEntity,
  ServiceProps
} from '@core/models/ProfessionalEntity'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { AppSelectOutline } from '@components/common/Selects/AppSelectOutline'
import { ValidateUpdateProfessionalUserBodyService } from '@core/services/users/ValidateUpdateProfessionalUserBodyService'
import { DateValue } from '@nextui-org/react'
import { AppConfigurationServiceInputs } from './AppConfigurationServiceInputs'
import { now, fromDate } from '@internationalized/date'
import { UpdateUserService } from '@core/services/users/UpdateUserService'

type JobConstantInput = JobConstant | ''
export interface UpdateProfessionalUserForm {
  job: JobConstantInput
  startAtInMilli: number
  services: ServiceProps
}
export interface UpdateProfessionalUserErrorForm {
  job: string
  startAtInMilli: string
  services: {
    name: string
    price: string
  }[]
}

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
export function AppConfigurationFormProfessional() {
  const [user, setUser] = useState(
    GetUserInfoService.exec() as ProfessionalEntity | undefined
  )

  const [form, setForm] = useState<UpdateProfessionalUserForm>({
    job: (user?.job ?? '') as JobConstantInput,
    startAtInMilli: user?.startedAtInMilli ?? 0,
    services:
      user && user.services.length > 0
        ? user.services
        : [{ name: '', price: 0 }]
  })
  const [formError, setFormError] = useState<UpdateProfessionalUserErrorForm>({
    job: '',
    startAtInMilli: '',
    services: [
      {
        name: '',
        price: ''
      }
    ]
  })

  const handleAddService = () => {
    setForm((prev) => ({
      ...prev,
      services: [...prev.services, { name: '', price: 0 }]
    }))
  }

  const handleRemoveService = (index: number) => {
    if (form.services.length === 1) return

    setForm((prev) => {
      const serviceClone = [...prev.services]
      serviceClone.splice(index, 1)
      return { ...prev, services: serviceClone }
    })
  }

  const onChangeJob = (value: string) => {
    const newForm = {
      ...form,
      job: value as JobConstantInput
    }
    setForm(newForm)

    const res =
      ValidateUpdateProfessionalUserBodyService.validateJobInfos(newForm)
    if (res.isError && Boolean(res.job))
      setFormError((prev) => ({ ...prev, job: res.job }))
    else setFormError((prev) => ({ ...prev, job: '' }))
  }

  const onChangeDate = (value: DateValue) => {
    const time = value.toDate(timezone).getTime()
    const newForm = { ...form, startAtInMilli: time }
    setForm(newForm)

    const res =
      ValidateUpdateProfessionalUserBodyService.validateJobInfos(newForm)
    if (res.isError && Boolean(res.startAtInMilli))
      setFormError((prev) => ({
        ...prev,
        startAtInMilli: res.startAtInMilli as string
      }))
    else setFormError((prev) => ({ ...prev, startAtInMilli: '' }))
  }

  const findServiceError = () => {
    let hasError = false
    for (let i = 0; i < formError.services.length; i++) {
      const item = formError.services[i]
      if (item.name.length > 0 || item.price.length > 0) {
        hasError = true
        break
      }
    }

    return hasError
  }

  useEffect(() => {
    const user = GetUserInfoService.exec() as ProfessionalEntity | undefined
    setUser(user)
    const serviceError = findServiceError()
    if (
      Boolean(formError.startAtInMilli) ||
      Boolean(formError.job) ||
      serviceError
    )
      return

    const timer = setTimeout(() => {
      if (!user) throw new Error('Não foi possível encontrar a sua conta')

      user.job = form.job as JobConstant
      user.startedAtInMilli = form.startAtInMilli
      user.services = form.services.filter(
        (item) => item.name.length > 0 && item.price > 0
      )

      UpdateUserService.exec(user)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [form, setForm])

  return (
    <Container>
      <Grid>
        <div style={{ height: '100%' }}>
          <AppSelectOutline
            style={{ height: '100%' }}
            wrapperStyle={{ height: '100%' }}
            options={[
              'Personal Trainer',
              'Nutricionista',
              'Quiroprata',
              'Fisioterapeuta'
            ]}
            label="Insira a sua profissão"
            isRequired
            icon={<FaBriefcaseMedical />}
            onChange={onChangeJob}
            value={form.job}
            isInvalid={Boolean(formError.job)}
            errorMessage={formError.job}
          />
        </div>

        <div style={{ height: '100%' }}>
          <AppDatePicker
            style={{ height: '100%' }}
            wrapperStyle={{ height: '100%' }}
            label="Iniciou em"
            isDateUnavailable={(date) => {
              if (date.toDate(timezone).getTime() < Date.now()) return false
              return true
            }}
            showMonthAndYearPickers
            isRequired
            onChange={onChangeDate}
            value={
              form.startAtInMilli > 0
                ? fromDate(new Date(form.startAtInMilli), timezone)
                : now(timezone)
            }
            isInvalid={Boolean(formError.startAtInMilli)}
            errorMessage={formError.startAtInMilli}
          />
        </div>
      </Grid>

      {form.services.map((_, index) => (
        <AppConfigurationServiceInputs
          key={index}
          index={index}
          form={form}
          setForm={setForm}
          formError={formError}
          setFormError={setFormError}
          handleRemoveService={handleRemoveService}
        />
      ))}

      <AppButtonActionRect
        onClick={handleAddService}
        text="Mais serviço"
        icon={<FaRegSquarePlus />}
      />
    </Container>
  )
}
