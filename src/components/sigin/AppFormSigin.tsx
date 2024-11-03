import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppDefaultInput } from '@components/common/Inputs/DefaultInput/AppDefaultInput'
import Link from 'next/link'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa6'
import { FormSiginStyle } from './FormSiginStyle'
import { ValidateFormService } from '@core/services/sigin/ValidateFormService'

// é importante ter esta interface pois o service vai usa-la para coletar os erros e formata-los
export interface SiginFormProps {
  email: string
  password: string
}

export function AppFormSigin() {
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
      setFormErrorMessage({
        email: result.email,
        password: result.password
      })
  }

  return (
    <FormSiginStyle>
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

          <p id="create-account-link">
            Não tem uma conta?
            <Link href="/signup">
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
          src="/img/login-register/idosa.jpg"
          alt="Idosa meditando"
          width={300}
          height={300}
          priority
        />
      </div>
    </FormSiginStyle>
  )
}