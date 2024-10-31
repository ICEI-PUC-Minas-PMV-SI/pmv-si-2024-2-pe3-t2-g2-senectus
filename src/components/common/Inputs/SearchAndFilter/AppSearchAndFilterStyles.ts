import styled from 'styled-components'

export const AppSearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 550px) {
    gap: 1.15rem;
    flex-direction: column;
    align-items: start;

    & .filter {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`
