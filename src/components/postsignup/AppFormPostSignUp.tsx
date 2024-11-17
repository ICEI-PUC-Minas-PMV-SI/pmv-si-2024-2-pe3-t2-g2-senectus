import 'react-toastify/dist/ReactToastify.css'

import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup, Radio } from '@nextui-org/radio'
import { FormPostSignUpStyle } from './FormPostSignUpStyle'
import Link from 'next/link'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { PreSignupRepo } from '@core/repositories/PreSignupRepo'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'
import { useRouter } from 'next/navigation'
import { CreateUserService } from '@core/services/users/CreateUserService'
import { AuthenticationService } from '@core/services/login/AuthenticationService'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'

type RadioConstant = 'professional' | 'client' | ''

export function AppFormPostSignUp() {
  const router = useRouter()
  const [selectedRadio, setSelectedRadio] = useState<RadioConstant>('')

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value.split('-')[0] as RadioConstant)
  }

  const onSubmit = () => {
    if (!selectedRadio) {
      return NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        'Por favor, selecione uma opção antes de prosseguir.'
      )
    }

    try {
      const registry = PreSignupRepo.get()
      if (!registry) throw new Error('Pré-registro não encontrado')

      const user = CreateUserService.exec({
        type:
          selectedRadio === 'professional'
            ? UserEntityTypeEnum.PROFESSIONAL
            : UserEntityTypeEnum.CLIENT,
        name: registry.name,
        email: registry.email,
        password: registry.password
      })
      AuthenticationService.exec(registry)
      PreSignupRepo.unregister()

      if (user?.type === UserEntityTypeEnum.CLIENT) router.push('/exercises')
      else router.push('/clients')
    } catch (e) {
      NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        (e as Error).message
      )
    }
  }

  return (
    <>
      <NotificationContainer />
      <FormPostSignUpStyle>
        <div id="forms">
          <div id="logo">
            <Link href="/">
              <Image
                src="/img/common/logo.png"
                alt="Logotipo do Senectus"
                height={90}
                width={60}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          <div id="form-content">
            <h1>Estamos quase lá!</h1>

            <div id="radio-content">
              <p>
                Para finalizar o cadastro da sua conta de usuário, por favor nos
                informe o que te trouxe aqui:
              </p>
              <RadioGroup onValueChange={handleRadioChange} id="options">
                <Radio value="professional-1" size="sm">
                  Divulgar eventos com foco na saúde física dos idosos.
                </Radio>
                <Radio value="professional-2" size="sm">
                  Publicar meus artigos relacionados a saúde dos idosos.
                </Radio>
                <Radio value="professional-3" size="sm">
                  Prestar serviços e consultas para a terceira idade.
                </Radio>
                <Radio value="client-1" size="sm">
                  Cuidar de minha saúde física durante o envelhecimento.
                </Radio>
                <Radio value="client-2" size="sm">
                  Ajudar a cuidar da saúde de um parente ou conhecido.
                </Radio>
              </RadioGroup>
            </div>
            <div id="buttons">
              <Link href="/signup">
                <AppButtonActionRectOutline
                  href="/signup"
                  text={'Voltar'}
                  fullWidth
                />
              </Link>
              <AppButtonActionRect
                type="button"
                text="Criar minha conta"
                fullWidth
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>

        <div id="wallpaper">
          <Image
            src="/img/login-signup/idoso_andando_de_bicicleta.jpg"
            alt="Idoso andando de bicicleta"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </FormPostSignUpStyle>
    </>
  )
}
