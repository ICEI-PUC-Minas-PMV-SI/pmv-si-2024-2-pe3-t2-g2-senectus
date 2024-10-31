import styled from 'styled-components'

export const ProfessionalSearchListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 380px) {
    justify-content: center;
    width: 100%;
  }

  & .pagination {
    place-self: center;
  }
`
