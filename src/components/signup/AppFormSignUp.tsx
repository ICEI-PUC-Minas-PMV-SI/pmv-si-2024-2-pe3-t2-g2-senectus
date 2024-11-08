import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import Link from 'next/link'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaEnvelope, FaLock, FaTag } from 'react-icons/fa6'
import { FormSignUpStyle } from './FormSignUpStyle'
import { ValidateFormService } from '@core/services/signup/ValidateFormService'

// é importante ter esta interface pois o service vai usa-la para coletar os erros e formata-los
export interface SignUpFormProps {
  name: string
  email: string
  password: string
}

export function AppFormSignUp() {
  const [formErrorMessage, setFormErrorMessage] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [form, setForm] = useState<SignUpFormProps>({
    name: '',
    email: '',
    password: ''
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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    const result = ValidateFormService.exec(form)
    if (result.isError)
      setFormErrorMessage({
        name: result.name,
        email: result.email,
        password: result.password
      })
  }

  return (
    <FormSignUpStyle>
      <div id="forms">
        <Image
          src="/img/common/logo.png"
          alt="Logotipo do Senectus"
          height={90}
          width={60}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />

        <div id="form-content">
          <form>
            <h1>Criar Conta</h1>
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

            <AppButtonActionRect
              type="submit"
              text="Prosseguir"
              fullWidth
              onClick={onSubmit}
            />
          </form>

          <p id="create-account-link">
            Já tem uma conta?
            <Link href="/login">
              {' '}
              {/* Crie uma pasta com o nome deste endpoint */}
              Clique aqui
            </Link>
            .
          </p>
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
  )
}
