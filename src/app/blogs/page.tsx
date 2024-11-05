"use client";

import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/theme';
import { NextUIProvider } from '@nextui-org/react';
import { AppHeader } from '@components/common/Header/AppHeader';
import { AppContainer } from '@components/common/Container/AppContainer';
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter';
import { AppInitialText } from '@components/common/Text/AppInitialText';
import { AppPagination } from '@components/common/Pagination/AppPagination';
import { EventAvatar } from '@components/events/list/EventAvatarStyle';
import { EventInfo } from '@components/events/list/EventInfoStyle';
import { EventItemContainer } from '@components/events/list/EventItemContainerStyle';
import { useState } from 'react';
import Link from 'next/link';
import '../globals.css';

const posts = [
  {
    id: 1,
    author: "Antônio Souza",
    role: "Geriatra",
    title: "Como a Atividade Física Melhora a Qualidade de Vida na Terceira Idade",
    description: "Exercícios físicos podem reduzir hospitalizações e promover o envelhecimento saudável.",
    time: "Postado há 1 dia"
  },
  {
    id: 2,
    author: "Mariana Oliveira",
    role: "Educadora Física",
    title: "Caminhada: O Exercício Ideal para Idosos",
    description: "Entenda os benefícios de caminhadas leves para manter a saúde cardiovascular.",
    time: "Postado há 3 horas"
  },
  {
    id: 3,
    author: "Lucas Fernandes",
    role: "Personal trainer",
    title: "Dicas de Exercícios Adaptados para Idosos",
    description: "Sugestões de atividades simples para promover mobilidade e bem-estar.",
    time: "Postado há 5 horas"
  },
  {
    id: 4,
    author: "João Almeida",
    role: "Clínico Geral",
    title: "Importância do Acompanhamento Médico na Terceira Idade",
    description: "Saiba como exames preventivos ajudam a garantir uma vida mais saudável.",
    time: "Postado há 6 horas"
  },
  {
    id: 5,
    author: "Beatriz Mendes",
    role: "Nutricionista",
    title: "Alimentação Saudável na Terceira Idade",
    description: "Descubra como uma alimentação equilibrada pode melhorar a qualidade de vida na terceira idade.",
    time: "Postado há 8 horas"
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const options = ['Todos', 'Atividade Física', 'Nutrição', 'Saúde'];

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
            title="Pesquisar postagem" 
            subtitle="Pesquise por alguma de nossas postagens abaixo:" 
          />
          <AppSearchAndFilter
            onFilterClick={handleFilterClick}
            onChange={handleSearchChange}
            placeholder="Insira o nome da postagem"
            options={options}
          />

          <section className="post-list">
            {posts.map((post) => (
              <EventItemContainer key={post.id} href={`/blogs/${post.id}`}>
                <EventInfo>
                  <div className="header-row">
                    <div className="profile">
                      <EventAvatar>{post.author[0]}</EventAvatar>
                      <div className="name-and-role">
                        <h3>{post.author}</h3>
                        <p className="role">{post.role}</p>
                      </div>
                    </div>
                    <span className="timestamp">{post.time}</span>
                  </div>
                  <p className="title" style={{ color: '#007BFF' }}>{post.title}</p>
                  <p className="description">{post.description}</p>
                </EventInfo>
              </EventItemContainer>
            ))}
          </section>

          
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
