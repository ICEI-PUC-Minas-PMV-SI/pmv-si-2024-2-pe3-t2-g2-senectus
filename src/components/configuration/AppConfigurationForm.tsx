import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import { FaCity, FaEnvelope, FaRoad, FaTag } from 'react-icons/fa6'
import { Container, FullWidthContainer, Grid } from './ConfigurationFormStyle'

export function AppConfigurationForm() {
  return (
    <Container>
      <Grid>
        <AppDefaultInput label="Insira seu nome completo" icon={<FaTag />} />

        <AppDefaultInput label="Insira seu email" icon={<FaEnvelope />} />

        <AppDefaultInput label="Insira seu estado" icon={<FaCity />} />

        <AppDefaultInput label="Insira sua cidade" icon={<FaCity />} />

        <FullWidthContainer>
          <AppDefaultInput label="Insira seu endereço" icon={<FaRoad />} />
        </FullWidthContainer>
      </Grid>
    </Container>
  )
}
