import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'
import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup, Radio } from '@nextui-org/radio'
import { FormPostSignUpStyle } from './FormPostSignUpStyle'

export function AppFormPostSignUp() {
  const [selectedRadio, setSelectedRadio] = useState<string>('')

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value)
  }

  const onSubmit = () => {
    if (!selectedRadio) {
      alert('Por favor, selecione uma opção antes de prosseguir.')
      return
    }
    console.log('Razão selecionada:', selectedRadio)
  }

  return (
    <FormPostSignUpStyle>
      <div id="forms">
        <div id="logo">
          <Image
            src="/img/common/logo.png"
            alt="Logotipo do Senectus"
            height={90}
            width={60}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
        </div>

        <h1>Estamos quase lá!</h1>

        <div id="radio-content">
          <label id="label">
            Para finalizar o cadastro da sua conta, por favor nos informe o que
            te trouxe aqui:
          </label>
          <RadioGroup onValueChange={handleRadioChange}>
            <Radio value="divulgar-eventos">
              Divulgar eventos com foco na saúde física dos idosos.
            </Radio>
            <Radio value="publicar-artigos">
              Publicar meus artigos relacionados a saúde dos idosos.
            </Radio>
            <Radio value="prestar-servicos">
              Prestar serviços e consultas para a terceira idade.
            </Radio>
            <Radio value="cuidar-saude">
              Cuidar de minha saúde física durante o envelhecimento.
            </Radio>
            <Radio value="ajudar-parente">
              Ajudar a cuidar da saúde de um parente ou conhecido.
            </Radio>
          </RadioGroup>
        </div>

        <div id="buttons">
          <AppButtonLinkRect id="voltar" href="/signup" text={'Voltar'} />
          <AppButtonActionRectOutline
            type="button"
            text="Criar minha conta"
            fullWidth
            onClick={onSubmit}
          />
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
  )
}
