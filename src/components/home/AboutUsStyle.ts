import styled from 'styled-components'

export const AboutUsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  & img {
    width: clamp(15rem, 80%, 35rem);
    height: auto;
    top: 2rem;
  }

  & .text-content {
    display: grid;
    width: 20rem;
    gap: 1rem;

    & button {
      margin-top: 1rem;
    }
  }

  & .prettify-title::before {
    left: -3%;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 90vw;
    gap: 1rem;

    & .text-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`
