import { AppContainer } from '@components/common/Container/AppContainer'
import { ReactNode } from 'react'
import {
  FaVirus,
  FaPersonWalking,
  FaBone,
  FaDumbbell,
  FaBrain,
  FaArrowRight
} from 'react-icons/fa6'
import { v4 as uuid } from 'uuid'
import { BenefitsStyle } from './BenefitsStyle'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'

interface BenefitsProps {
  title: string
  text: string
  icon: ReactNode
}

const benefits: BenefitsProps[] = [
  {
    title: 'Previne doenças',
    text: 'A prática continua de exercícios ajuda qualquer indivíduo, principalmente os idosos, a se prevenir de doenças graves, como: câncer, diabete tipo 2 e doenças cardiovasculares.',
    icon: <FaVirus />
  },
  {
    title: 'Coordenação motora',
    text: 'O sedentarismo em idosos sempre esteve associado como um dos responsáveis pelo declínio cognitivo dos mesmos. Uma maneira de prevenir este problema é uma boa prática diária de exercícios.',
    icon: <FaPersonWalking />
  },
  {
    title: 'Redução de lesões',
    text: 'O sedentarismo pode aumentar a probabilidade de lesões mais graves entre os idosos, como uma forma de evitar isto, a prática de exercícios acompanhados por profissionais é mais que importante!',
    icon: <FaBone />
  },
  {
    title: 'Ganho de massa muscular',
    text: 'A prática de atividades física sempre foram responsáveis pelo aumento de massa muscular, isso além de, na grande maioria das vezes, melhorar a sua estética, aprimora o seu rendimento físico.',
    icon: <FaDumbbell />
  },
  {
    title: 'Saúde mental',
    text: 'Além de tudo isso, a prática de exercícios te traz uma grande e benéfica injeção de ânimo, além de aprimorara sua autoestima e autoconfiança!',
    icon: <FaBrain />
  }
]

export function AppBenefits() {
  return (
    <AppContainer>
      <BenefitsStyle>
        <h1 className="caret-primary-700 prettify-title">
          Prós dos exercícios
        </h1>

        <ul id="benefits-cards">
          {benefits.map((item, i) => (
            <li key={uuid()}>
              <div className="card-header">
                <span>{item.icon}</span>
                {i == benefits.length - 1 && (
                  <AppButtonLinkRect
                    href="/exercises"
                    icon={<FaArrowRight />}
                    text="Exercitar"
                  />
                )}
              </div>
              <div className="text">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </BenefitsStyle>
    </AppContainer>
  )
}
