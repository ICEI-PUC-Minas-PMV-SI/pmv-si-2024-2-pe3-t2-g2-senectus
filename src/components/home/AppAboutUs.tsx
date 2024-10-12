import { AppContainer } from '@components/common/Container/AppContainer'
import { AboutUsStyle } from './AboutUsStyle'
import Image from 'next/image'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'

export function AppAboutUs() {
  return (
    <AppContainer style={{ justifyContent: 'unset' }}>
      <AboutUsStyle>
        <div className="text-content">
          <h1 className="prettify-title">Sobre nós</h1>

          <p>
            O projeto Senectus é uma iniciativa proposta por alguns estudantes{' '}
            da PUC Minas, juntamente com a parceria de profissionais altamente{' '}
            qualificados na área, com o intuito de retardar e reduzir o aumento{' '}
            do sedentarismo em nosso país, o que cada vez mais vem trazendo{' '}
            dados preocupantes!
          </p>

          <AppButtonLinkRect href="/exercises" text="Exercitar" />
        </div>

        <Image
          src="/img/home/about-us-img.png"
          alt="foto de idosos"
          width={500}
          height={550}
        />
      </AboutUsStyle>
    </AppContainer>
  )
}
