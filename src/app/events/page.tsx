"use client";

import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/theme';
import { NextUIProvider } from '@nextui-org/react';
import { AppHeader } from '@components/common/Header/AppHeader';
import { AppContainer } from '@components/common/Container/AppContainer';
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter';
import { AppInitialText } from '@components/common/Text/AppInitialText';
import { useState } from 'react';
import { AppPagination } from '@components/common/Pagination/AppPagination';
import { EventAvatar } from '@components/events/list/EventAvatarStyle';
import { EventInfo } from '@components/events/list/EventInfoStyle';
import { EventItemContainer } from '@components/events/list/EventItemContainerStyle';
import '../globals.css';

const events = [
  {
    id: 1,
    name: "Marcos Lessa",
    role: "Geriatra",
    title: "Saúde em Movimento: Caminhada e Alongamento",
    description: "Atividades ao ar livre com caminhada leve e exercícios de alongamento.",
    time: "1 hora atrás"
  },
  {
    id: 2,
    name: "Carla Ferreira",
    role: "Fisioterapeuta",
    title: "Encontro de Pilates para Idosos",
    description: "Aula de pilates adaptado para fortalecer músculos e melhorar a flexibilidade.",
    time: "3 horas atrás"
  },
  {
    id: 3,
    name: "Antônio Almeida",
    role: "Educador Físico",
    title: "Aula de Dança para Idosos",
    description: "Uma sessão divertida de dança de baixo impacto para socializar e manter-se ativo.",
    time: "5 horas atrás"
  },
  {
    id: 4,
    name: "Silvia Mendes",
    role: "Nutricionista",
    title: "Oficina de Alimentação Saudável para a Terceira Idade",
    description: "Ensinando a montar refeições nutritivas para saúde e energia diárias.",
    time: "7 horas atrás"
  },
  {
    id: 5,
    name: "Pedro Lima",
    role: "Cardiologista",
    title: "Palestra sobre Saúde Cardíaca",
    description: "Dicas práticas para cuidar do coração na terceira idade e prevenir doenças.",
    time: "9 horas atrás"
  }
];

export default function EventSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const options = ['Todos', 'Caminhada', 'Pilates'];

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterClick = (selectedOption: string) => {
    console.log(`Filtro selecionado: ${selectedOption}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider className="default">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          <AppInitialText 
            title="Sua lista de eventos" 
            subtitle="Pesquise o melhor evento para melhorar sua saúde." 
          />
          <AppSearchAndFilter
            onFilterClick={handleFilterClick}
            onChange={handleSearchChange}
            placeholder="Insira o nome do evento"
            options={options}
          />

          <section className="event-list">
            {events.map((event) => (
              <EventItemContainer key={event.id} href={`/events/${event.id}`}>
                <EventInfo>
                  <div className="header-row">
                    <div className="profile">
                      <EventAvatar>{event.name[0]}</EventAvatar>
                      <div className="name-and-role">
                        <h3>{event.name}</h3>
                        <p className="role">{event.role}</p>
                      </div>
                    </div>
                    <span className="timestamp">{event.time}</span>
                  </div>
                  <p className="title">{event.title}</p>
                  <p className="description">{event.description}</p>
                </EventInfo>
              </EventItemContainer>
            ))}
          </section>

          {/* Paginação */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <AppPagination 
              total={5} 
              initialPage={1} 
              onChange={(page) => handlePageChange(page)} 
            />
          </div>

        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  );
}
