import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import {
  UpdateProfessionalUserErrorForm,
  UpdateProfessionalUserForm
} from './AppConfigurationFormProfessional'
import { FlexContainer, Grid } from './ConfigurationFormProfessional'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import { FaHandHoldingMedical, FaSackDollar, FaTrash } from 'react-icons/fa6'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { ValidateUpdateProfessionalUserBodyService } from '@core/services/users/ValidateUpdateProfessionalUserBodyService'

interface AppConfigurationServiceInputsProps {
  index: number
  form: UpdateProfessionalUserForm
  setForm: Dispatch<SetStateAction<UpdateProfessionalUserForm>>
  formError: UpdateProfessionalUserErrorForm
  setFormError: Dispatch<SetStateAction<UpdateProfessionalUserErrorForm>>
  handleRemoveService: (index: number) => void
}

export function AppConfigurationServiceInputs(
  props: AppConfigurationServiceInputsProps
) {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const clone = [...props.form.services]
    clone[props.index].name = e.target.value
    const newForm = {
      ...props.form,
      services: clone
    }
    props.setForm(newForm)

    const res = ValidateUpdateProfessionalUserBodyService.validateServiceInfo(
      clone[props.index]
    )
    if (res.isError && Boolean(res.name))
      props.setFormError((prev) => {
        const clone = [...prev.services]
        clone[props.index].name = res.name
        return { ...prev, services: clone }
      })
    else
      props.setFormError((prev) => {
        const clone = [...prev.services]
        clone[props.index].name = ''
        return { ...prev, services: clone }
      })
  }

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const clone = [...props.form.services]
    clone[props.index].price = Number(e.target.value)
    const newForm = {
      ...props.form,
      services: clone
    }
    props.setForm(newForm)

    const res = ValidateUpdateProfessionalUserBodyService.validateServiceInfo(
      clone[props.index]
    )
    if (res.isError && Boolean(res.price))
      props.setFormError((prev) => {
        const clone = [...prev.services]
        clone[props.index].price = String(res.price)
        return { ...prev, services: clone }
      })
    else
      props.setFormError((prev) => {
        const clone = [...prev.services]
        clone[props.index].price = ''
        return { ...prev, services: clone }
      })
  }

  return (
    <Grid>
      <div style={{ height: '100%' }}>
        <AppDefaultInput
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          label="Nome do serviço prestado"
          icon={<FaHandHoldingMedical />}
          value={props.form.services[props.index]?.name}
          isRequired
          onChange={onChangeName}
          isInvalid={Boolean(props.formError.services[props.index]?.name)}
          errorMessage={props.formError.services[props.index]?.name}
        />
      </div>

      <FlexContainer>
        <AppDefaultInput
          label="Insira o valor a ser cobrado"
          style={{ height: '100%' }}
          wrapperStyle={{ height: '100%' }}
          icon={<FaSackDollar />}
          type="number"
          value={String(props.form.services[props.index]?.price)}
          isRequired
          onChange={onChangePrice}
          isInvalid={Boolean(props.formError.services[props.index]?.price)}
          errorMessage={props.formError.services[props.index]?.price}
        />

        <AppButtonActionRect
          isIconOnly
          icon={<FaTrash />}
          onClick={() => props.handleRemoveService(props.index)}
        />
      </FlexContainer>
    </Grid>
  )
}
