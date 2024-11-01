import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { AppDivider } from '@components/common/Divider/AppDivider'
import { FaTriangleExclamation } from 'react-icons/fa6'
import {
  Card,
  Container,
  Content,
  Icon,
  IconContainer,
  SectionTitle,
  Text,
  Title,
  WarningText
} from './DangerZoneStyle'

export function AppDangerZone() {
  return (
    <Container>
      <Card>
        <Content>
          <Title>Zona de perigo</Title>
          <Text>Tenha atenção ao realizar ações nesta seção!</Text>

          <AppDivider />

          <div className="disconect-zone">
            <SectionTitle>Desconectar</SectionTitle>
            <Text>Esta ação vai te desconectar da plataforma:</Text>

            <AppButtonActionRectOutline text="Sair da conta" />
          </div>

          <AppDivider />

          <div className="remove-zove">
            <SectionTitle>Remover conta</SectionTitle>
            <Text>
              <WarningText>Atenção:</WarningText> esta ação é irreversível:
            </Text>

            <AppButtonActionRectOutline text="Excluir conta" />
          </div>
        </Content>

        <IconContainer>
          <Icon>
            <FaTriangleExclamation size={200} />
          </Icon>
        </IconContainer>
      </Card>
    </Container>
  )
}
