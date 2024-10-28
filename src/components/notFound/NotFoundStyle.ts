import styled from 'styled-components'

export const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 0.75rem;

  & img {
    width: clamp(12rem, 40vw, 38rem);
    height: auto;
  }

  & p {
    max-width: 20rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
