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
import { DeleteUserService } from '@core/services/users/DeleteUserService'
import { useRouter } from 'next/navigation'
import { useDisclosure } from '@nextui-org/modal'
import { LogoutService } from '@core/services/login/LogoutService'
import { AppDeleteAccountModal } from './AppDeleteAccountModal'

export function AppDangerZone() {
  const deleteAccountModalController = useDisclosure()
  const router = useRouter()
  const onDeleteAccount = () => {
    DeleteUserService.exec()
    router.push('/')
    deleteAccountModalController.onClose()
  }

  const onLogout = () => {
    LogoutService.exec()
    router.push('/')
  }

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

            <AppButtonActionRectOutline
              text="Sair da conta"
              onClick={onLogout}
            />
          </div>

          <AppDivider />

          <div className="remove-zove">
            <SectionTitle>Remover conta</SectionTitle>
            <Text>
              <WarningText>Atenção:</WarningText> esta ação é irreversível:
            </Text>

            <AppButtonActionRectOutline
              text="Excluir conta"
              onClick={deleteAccountModalController.onOpen}
            />
          </div>
        </Content>

        <IconContainer>
          <Icon>
            <FaTriangleExclamation size={200} />
          </Icon>
        </IconContainer>
      </Card>

      <AppDeleteAccountModal
        controller={deleteAccountModalController}
        onCancel={deleteAccountModalController.onClose}
        onDelete={onDeleteAccount}
      />
    </Container>
  )
}
