'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { PageContainer } from '@components/blogs/details/PageContainerStyle'
import { HeaderSection } from '@components/blogs/details/HeaderSectionStyle'
import { ContentSection } from '@components/blogs/details/ContentSectionStyle'
import { PostInfo } from '@components/blogs/details/PostInfoStyle'
import { Sidebar } from '@components/blogs/details/SidebarStyle'
import { Card } from '@components/blogs/details/CardStyle'
import '../../globals.css'
import Image from 'next/image'
import { FaCheck, FaEye } from 'react-icons/fa6'
import NotFound from '../../not-found'

const posts = [
  {
    id: '1',
    title:
      'Como a Atividade Física Melhora a Qualidade de Vida na Terceira Idade',
    image: '/img/blogs/Post-1.jpg',
    trustLevel: 'Confiável',
    viewsCount: '2K visualizações',
    description: `
      A prática regular de atividades físicas é essencial para o envelhecimento saudável. Estudos mostram que o exercício físico pode ajudar a prevenir doenças crônicas como diabetes, hipertensão e problemas cardíacos. Além disso, a atividade física melhora o humor, combate a depressão e a ansiedade, promovendo uma sensação de bem-estar geral.

      Pesquisas indicam que o exercício também contribui para a preservação das habilidades cognitivas, reduzindo o risco de demência. Atividades físicas regulares, como caminhadas e alongamentos, ajudam a fortalecer os músculos e a melhorar o equilíbrio, o que é fundamental para a prevenção de quedas — uma das maiores causas de hospitalizações entre idosos.

      Além disso, a prática constante de exercícios pode melhorar a mobilidade e a flexibilidade, permitindo que os idosos mantenham a independência em suas atividades diárias. Com todos esses benefícios, incorporar a atividade física na rotina é um dos passos mais importantes para promover uma vida saudável e ativa na terceira idade.
    `
  },
  {
    id: '2',
    title: 'Caminhada: O Exercício Ideal para Idosos',
    image: '/img/blogs/Post-2.jpg',
    trustLevel: 'Confiável',
    viewsCount: '1.5K visualizações',
    description: `
      A caminhada é uma das atividades físicas mais acessíveis e benéficas para idosos. Por ser uma atividade de baixo impacto, é uma excelente escolha para manter a saúde cardiovascular sem exigir grande esforço físico. Caminhar regularmente ajuda a fortalecer o coração, melhorar a circulação sanguínea e controlar a pressão arterial.

      Além dos benefícios físicos, a caminhada proporciona momentos de socialização, especialmente quando realizada em grupo, incentivando a interação e reduzindo o isolamento social, que é comum na terceira idade. O contato com a natureza durante caminhadas em parques ou praças pode ser revigorante e ajudar a combater o estresse.

      Caminhadas diárias, mesmo que curtas, podem aumentar a disposição e promover uma noite de sono mais tranquila. Para muitos idosos, caminhar é mais do que uma atividade física — é um ritual que melhora a qualidade de vida de forma holística.
    `
  },
  {
    id: '3',
    title: 'Dicas de Exercícios Adaptados para Idosos',
    image: '/img/blogs/Post-3.jpg',
    trustLevel: 'Confiável',
    viewsCount: '1.3K visualizações',
    description: `
      Exercícios adaptados são fundamentais para atender às necessidades físicas de idosos, proporcionando segurança e eficácia. Alongamentos, fortalecimento muscular e exercícios de equilíbrio são especialmente úteis para melhorar a mobilidade e reduzir o risco de quedas, um problema comum nessa fase da vida.

      A prática de exercícios adaptados pode incluir atividades como levantar-se de uma cadeira sem apoio, que trabalha a força das pernas, e equilíbrio em um pé, que fortalece o core. Exercícios de resistência, como o uso de faixas elásticas, ajudam a preservar a força muscular, enquanto exercícios de respiração são eficazes para aumentar a capacidade pulmonar.

      Esses exercícios adaptados não apenas melhoram a força física, mas também proporcionam confiança e maior independência para realizar atividades do cotidiano. Com a orientação de um profissional, é possível adaptar a rotina de exercícios de acordo com as limitações e necessidades individuais.
    `
  },
  {
    id: '4',
    title: 'Importância do Acompanhamento Médico na Terceira Idade',
    image: '/img/blogs/Post-4.jpg',
    trustLevel: 'Confiável',
    viewsCount: '1.2K visualizações',
    description: `
      O acompanhamento médico regular é essencial para garantir a saúde e o bem-estar na terceira idade. Consultas frequentes ajudam a identificar precocemente doenças comuns, como osteoporose, problemas cardíacos e diabetes, permitindo tratamentos mais eficazes.

      Muitos idosos enfrentam o desafio de administrar múltiplas condições de saúde ao mesmo tempo. Com o acompanhamento médico adequado, é possível ajustar medicamentos e tratamentos para reduzir efeitos colaterais e otimizar a saúde. Exames de rotina, como check-ups cardiovasculares e exames de densidade óssea, também são essenciais para a prevenção de complicações.

      O apoio psicológico durante as consultas também é crucial, pois a saúde mental afeta diretamente a saúde física. Ter profissionais de confiança e um plano de cuidados bem estruturado garante uma qualidade de vida mais elevada e aumenta a longevidade.
    `
  },
  {
    id: '5',
    title: 'Dicas de Alimentação Saudável para Idosos',
    image: '/img/blogs/Post-5.jpg',
    trustLevel: 'Confiável',
    viewsCount: '1.8K visualizações',
    description: `
      Uma alimentação saudável é crucial para manter a saúde e a energia na terceira idade. Nessa fase, é importante consumir alimentos ricos em nutrientes, como frutas, legumes, proteínas magras e grãos integrais, que fornecem vitaminas e minerais essenciais para o corpo.

      Um aspecto importante da nutrição na terceira idade é a ingestão adequada de fibras para promover a saúde digestiva e prevenir a constipação, comum entre idosos. A hidratação é igualmente essencial, pois a sensação de sede tende a diminuir com o passar dos anos, aumentando o risco de desidratação.

      Evitar alimentos processados, açúcares refinados e excesso de sódio é fundamental para o controle de condições como hipertensão e diabetes. Pequenas mudanças na alimentação, com a ajuda de um nutricionista, podem fazer uma grande diferença na qualidade de vida e bem-estar diário dos idosos.
    `
  }
]

export default function BlogPostDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params

  const post = posts.find((post) => post.id === id)
  if (!post) return <NotFound />

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />
        <AppContainer>
          <PageContainer>
            <HeaderSection>
              <h1 className="prettify-title">{post.title}</h1>
            </HeaderSection>

            <ContentSection>
              <PostInfo>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  priority
                />
                <hr />
                <div className="description">
                  <p>{post.description}</p>
                </div>
              </PostInfo>

              <Sidebar>
                <Card>
                  <div className="info">
                    <FaCheck />
                    <p>{post.trustLevel}</p>
                  </div>
                  <div className="separator"></div>
                  <div className="info">
                    <FaEye />
                    <p>{post.viewsCount}</p>
                  </div>
                </Card>
              </Sidebar>
            </ContentSection>
          </PageContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
