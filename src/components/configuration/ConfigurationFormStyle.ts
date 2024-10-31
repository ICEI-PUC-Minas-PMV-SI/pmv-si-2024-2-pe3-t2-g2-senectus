import styled from 'styled-components'

export const Container = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: end;
`

export const FullWidthContainer = styled.div`
  grid-column: span 2;
`
