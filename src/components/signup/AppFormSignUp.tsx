import 'react-toastify/dist/ReactToastify.css'

import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import Link from 'next/link'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaEnvelope, FaLock, FaTag } from 'react-icons/fa6'
import { FormSignUpStyle } from './FormSignUpStyle'
import { ValidateFormService } from '@core/services/signup/ValidateFormService'
import { useRouter } from 'next/navigation'
import { PreSignupRepo } from '@core/repositories/PreSignupRepo'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'

export interface SignUpFormProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function AppFormSignUp() {
  const router = useRouter()
  const [formErrorMessage, setFormErrorMessage] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [form, setForm] = useState<SignUpFormProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const setName = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        name: event.target.value
      }
    })
  }

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

  const setConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        confirmPassword: event.target.value
      }
    })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    const result = ValidateFormService.exec(form)
    if (result.isError)
      return setFormErrorMessage({
        name: result.name,
        email: result.email,
        password: result.password,
        confirmPassword: result.confirmPassword
      })

    try {
      PreSignupRepo.register(form)
      router.push('/postsignup')
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
      <FormSignUpStyle>
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
              <h1>Criar conta</h1>
              <AppDefaultInput
                type="name"
                label="Insira seu nome completo"
                value={form.name}
                onChange={setName}
                icon={<FaTag />}
                isRequired
                isInvalid={Boolean(formErrorMessage.name)}
                errorMessage={formErrorMessage.name}
              />
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
              <AppDefaultInput
                type="password"
                label="Insira sua senha novamente"
                value={form.confirmPassword}
                onChange={setConfirmPassword}
                icon={<FaLock />}
                isRequired
                isInvalid={Boolean(formErrorMessage.confirmPassword)}
                errorMessage={formErrorMessage.confirmPassword}
              />

              <AppButtonActionRect
                type="submit"
                text="Prosseguir"
                fullWidth
                onClick={onSubmit}
              />
            </form>

            <div id="login-account-link">
              <p>Já tem uma conta?</p>
              <Link href="/login">Clique aqui</Link>
            </div>
          </div>
        </div>
        <div id="wallpaper">
          <Image
            src="/img/login-signup/idoso_andando_de_bicicleta.jpg"
            alt="Idoso andando de bicicleta"
            width={300}
            height={300}
            priority
          />
        </div>
      </FormSignUpStyle>
    </>
  )
}
