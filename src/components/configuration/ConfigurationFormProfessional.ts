import styled from 'styled-components'

export const Container = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  button {
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 1.5rem;
    svg {
      font-size: 1rem;
    }
  }
`
