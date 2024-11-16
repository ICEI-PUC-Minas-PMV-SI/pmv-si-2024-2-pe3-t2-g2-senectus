import 'react-toastify/dist/ReactToastify.css'

import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import Link from 'next/link'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa6'
import { FormSiginStyle } from './FormSiginStyle'
import { ValidateFormService } from '@core/services/login/ValidateFormService'
import { AuthenticationService } from '@core/services/login/AuthenticationService'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'
import { useRouter } from 'next/navigation'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'

export interface SiginFormProps {
  email: string
  password: string
}

export function AppFormSigin() {
  const router = useRouter()
  const [formErrorMessage, setFormErrorMessage] = useState({
    email: '',
    password: ''
  })
  const [form, setForm] = useState<SiginFormProps>({
    email: '',
    password: ''
  })

  const setEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        email: event.target.value
      }
    })
  }

  const setPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        password: event.target.value
      }
    })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    const result = ValidateFormService.exec(form)
    if (result.isError)
      return setFormErrorMessage({
        email: result.email,
        password: result.password
      })

    try {
      AuthenticationService.exec(form)
      const user = GetUserInfoService.exec()

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
      <FormSiginStyle>
        <div id="forms">
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

          <div id="form-content">
            <form>
              <h1>Conectar</h1>
              <AppDefaultInput
                type="email"
                label="Insira seu email"
                value={form.email}
                onChange={setEmail}
                icon={<FaEnvelope />}
                isRequired
                isInvalid={Boolean(formErrorMessage.email)}
                errorMessage={formErrorMessage.email}
              />
              <AppDefaultInput
                type="password"
                label="Insira sua senha"
                value={form.password}
                onChange={setPassword}
                icon={<FaLock />}
                isRequired
                isInvalid={Boolean(formErrorMessage.password)}
                errorMessage={formErrorMessage.password}
              />

              <AppButtonActionRect
                type="submit"
                text="Entrar"
                fullWidth
                onClick={onSubmit}
              />
            </form>

            <div id="create-account-link">
              <p>Não tem uma conta?</p>
              <Link href="/signup">Clique aqui</Link>
            </div>
          </div>
        </div>
        <div id="wallpaper">
          <Image
            src="/img/login-signup/idosa_meditando.jpg"
            alt="Idosa meditando"
            width={300}
            height={300}
            priority
          />
        </div>
      </FormSiginStyle>
    </>
  )
}
