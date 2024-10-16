import styled from 'styled-components'

export const AppSearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`
