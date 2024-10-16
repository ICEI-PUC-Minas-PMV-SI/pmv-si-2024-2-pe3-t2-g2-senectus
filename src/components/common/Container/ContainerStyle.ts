import styled from 'styled-components'

export const ContainerStyle = styled.div`
  display: grid;
  margin-top: 7rem;

  & .container {
    display: grid;
    place-self: center;
    justify-content: center;
    width: 93.3vw;
    max-width: 72.5rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 429px) {
    & .container {
      padding-left: 0;
      padding-right: 0;
      gap: 1rem;
    }
  }
`
