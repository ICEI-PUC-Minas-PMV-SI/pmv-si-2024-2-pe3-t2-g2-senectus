'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { PageContainer } from '@components/events/Details/PageContainerStyle'
import { HeaderSection } from '@components/events/Details/HeaderSectionStyle'
import { ContentSection } from '@components/events/Details/ContentSectionStyle'
import { EventInfo } from '@components/events/Details/EventInfoStyle'
import { Sidebar } from '@components/events/Details/SidebarStyle'
import { Card } from '@components/events/Details/CardStyle'
import '../../globals.css'
import Image from 'next/image'
import { FaCheck, FaEye } from 'react-icons/fa6'
import NotFound from '../../not-found'

// Array de eventos com dados dinâmicos
const eventsData = [
  {
    id: '1',
    title: 'Saúde em Movimento',
    subtitle:
      'Atividades ao ar livre com caminhada leve e exercícios de alongamento para manter a mobilidade.',
    image: '/img/events/event-1.jpg',
    trustLevel: 'Confiável',
    interestCount: '1.5K',
    description: `
      Participe de uma manhã especial dedicada à saúde e bem-estar! No nosso Encontro de Atividade Física para Idosos, 
      oferecemos atividades ao ar livre, como caminhadas leves e alongamentos, ideais para promover a mobilidade e 
      o fortalecimento muscular. O evento contará com a orientação de profissionais capacitados para garantir 
      uma experiência segura e agradável. Venha socializar, cuidar da saúde e desfrutar de momentos de descontração 
      em um ambiente acolhedor. Traga seus amigos e familiares para um dia repleto de movimento e alegria!
    `,
    responsible: 'Marcos Lessa',
    createdAt: '20/05/2024',
    startDate: '18/08/2024 às 14:30',
    endDate: '28/08/2024 às 14:30'
  },
  {
    id: '2',
    title: 'Encontro de Pilates para Idosos',
    subtitle:
      'Aula de pilates adaptado para fortalecer músculos e melhorar a flexibilidade.',
    image: '/img/events/event-2.jpg',
    trustLevel: 'Confiável',
    interestCount: '1.2K',
    description: `
      Aprenda e pratique pilates em um ambiente seguro e acolhedor, especialmente adaptado para a terceira idade. 
      Com o apoio de profissionais qualificados, realizaremos exercícios focados em fortalecer o corpo e aumentar 
      a flexibilidade, promovendo mais mobilidade e qualidade de vida. Junte-se a nós e descubra o bem-estar que 
      o pilates pode proporcionar!
    `,
    responsible: 'Carla Ferreira',
    createdAt: '22/05/2024',
    startDate: '22/08/2024 às 10:00',
    endDate: '22/08/2024 às 11:00'
  },
  {
    id: '3',
    title: 'Aula de Dança para Idosos',
    subtitle:
      'Uma sessão divertida de dança de baixo impacto para socializar e manter-se ativo.',
    image: '/img/events/event-3.jpg',
    trustLevel: 'Confiável',
    interestCount: '1.3K',
    description: `
      Junte-se a nós para uma aula animada de dança para idosos! Nossa sessão é pensada para proporcionar diversão, 
      movimento e socialização, com atividades de baixo impacto que fortalecem o corpo e aumentam a alegria de viver. 
      Venha movimentar o corpo e fazer novos amigos em um ambiente descontraído e amigável!
    `,
    responsible: 'Antônio Almeida',
    createdAt: '25/05/2024',
    startDate: '25/08/2024 às 09:00',
    endDate: '25/08/2024 às 10:30'
  },
  {
    id: '4',
    title: 'Oficina de Alimentação Saudável para a Terceira Idade',
    subtitle:
      'Ensinando a montar refeições nutritivas para saúde e energia diárias.',
    image: '/img/events/event-4.jpg',
    trustLevel: 'Confiável',
    interestCount: '1.8K',
    description: `
      Descubra como ter uma alimentação saudável na terceira idade! Esta oficina oferece dicas práticas para montar 
      refeições equilibradas que ajudam a manter a saúde e aumentar a energia no dia a dia. Participe e aprenda a 
      cuidar da sua nutrição com orientações de um especialista em alimentação para idosos.
    `,
    responsible: 'Silvia Mendes',
    createdAt: '28/05/2024',
    startDate: '28/08/2024 às 15:00',
    endDate: '28/08/2024 às 16:30'
  },
  {
    id: '5',
    title: 'Palestra sobre Saúde Cardíaca',
    subtitle:
      'Dicas práticas para cuidar do coração na terceira idade e prevenir doenças.',
    image: '/img/events/event-5.jpg',
    trustLevel: 'Confiável',
    interestCount: '2K',
    description: `
      Nesta palestra, aprenda com um cardiologista experiente sobre cuidados essenciais para manter a saúde do 
      coração na terceira idade. Descubra dicas práticas para prevenir doenças cardíacas e garantir uma vida mais 
      saudável e ativa. Não perca essa oportunidade de cuidar do seu bem-estar cardíaco!
    `,
    responsible: 'Pedro Lima',
    createdAt: '30/05/2024',
    startDate: '30/08/2024 às 14:00',
    endDate: '30/08/2024 às 15:30'
  }
]

export default function EventDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params

  // Busca o evento correspondente pelo id
  const event = eventsData.find((event) => event.id === id)

  if (!event) return <NotFound />

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />
        <AppContainer>
          <PageContainer>
            <HeaderSection>
              <h1 className="prettify-title">{event.title}</h1>
              <p className="subtitle">{event.subtitle}</p>
            </HeaderSection>

            <ContentSection>
              <EventInfo>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={300}
                />
                <div className="description">
                  <h2>Descrição do evento</h2>
                  <p>{event.description}</p>
                </div>
              </EventInfo>

              <Sidebar>
                <Card>
                  <div className="info">
                    <FaCheck />
                    <p>{event.trustLevel}</p>
                  </div>
                  <div className="separator"></div>
                  <div className="info">
                    <FaEye />
                    <p>{event.interestCount} tem interesse!</p>
                  </div>
                </Card>
                <Card>
                  <p>
                    <strong>Responsável:</strong> {event.responsible}
                  </p>
                  <p>
                    <strong>Criado em:</strong> {event.createdAt}
                  </p>
                  <div className="separator"></div>
                  <p>
                    <strong>Início:</strong> {event.startDate}
                  </p>
                  <p>
                    <strong>Término:</strong> {event.endDate}
                  </p>
                </Card>
                <AppButtonActionRect text="Registrar" fullWidth />
              </Sidebar>
            </ContentSection>
          </PageContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
