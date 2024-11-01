import React, { useState } from 'react'
import {
  FaBriefcaseMedical,
  FaCalendarDays,
  FaHandHoldingMedical,
  FaRegSquarePlus,
  FaSackDollar,
  FaTrash
} from 'react-icons/fa6'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import { Container, FlexContainer, Grid } from './ConfigurationFormProfessional'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'

export function AppConfigurationFormProfessional() {
  const [services, setServices] = useState([{ serviceName: '', price: '' }])

  const handleAddService = () => {
    setServices([...services, { serviceName: '', price: '' }])
  }

  const handleRemoveService = (index: number) => {
    if (services.length === 1) return
    const updatedServices = [...services]
    updatedServices.splice(index, 1)
    setServices(updatedServices)
  }

  return (
    <Container>
      <Grid>
        <div>
          <AppDefaultInput
            label="Insira a sua profissão"
            icon={<FaBriefcaseMedical />}
          />
        </div>

        <div>
          <AppDefaultInput label="Iniciou em" icon={<FaCalendarDays />} />
        </div>
      </Grid>

      {services.map((service, index) => (
        <Grid key={index}>
          <div>
            <AppDefaultInput
              label="Insira o nome do serviço que você presta"
              icon={<FaHandHoldingMedical />}
            />
          </div>

          <FlexContainer>
            <AppDefaultInput
              label="Insira o valor a ser cobrado"
              icon={<FaSackDollar />}
            />

            <AppButtonActionRect
              isIconOnly
              icon={<FaTrash />}
              onClick={() => handleRemoveService(index)}
            />
          </FlexContainer>
        </Grid>
      ))}

      <AppButtonActionRect
        onClick={handleAddService}
        text="Mais serviço"
        icon={<FaRegSquarePlus />}
      />
    </Container>
  )
}
