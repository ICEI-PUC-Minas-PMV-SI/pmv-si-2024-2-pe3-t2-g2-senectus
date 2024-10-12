import { InitialSectionHomeStyle } from './InitialSectionHomeStyle'
import Image from 'next/image'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'

export function AppInitialSectionHome() {
  return (
    <InitialSectionHomeStyle>
      <div className="text-content">
        <h1>Esqueça o sedentarismo, seja ativo!</h1>
        <p>
          Quer ter uma qualidade de vida cada vez melhor e perto de quem você
          ama? Junte-se a nós em uma longa jornada de exercícios físicos com um{' '}
          digno suporte de profissionais altamente qualificados!
        </p>
        <AppButtonLinkRect href="/exercises" text="Exercitar" />
      </div>
      <span></span>
      <Image
        src="/img/imagem-inicial.png"
        alt="idosa empolgada"
        width={600}
        height={600}
      />
    </InitialSectionHomeStyle>
  )
}
