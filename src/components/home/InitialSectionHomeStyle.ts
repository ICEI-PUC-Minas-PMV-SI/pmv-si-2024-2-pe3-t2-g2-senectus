import styled from 'styled-components'

export const InitialSectionHomeStyle = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  place-items: center;
  border-radius: 12px;
  padding: 2rem 0.75rem 2rem 3.25rem;
  background-color: ${({ theme }) => theme.color.secondaryColor};

  & span {
    display: none;
  }

  @media (min-width: 1216px) {
    height: 38rem;
  }

  & img {
    width: clamp(16rem, 55%, 38rem);
    position: relative;
  }

  & .text-content {
    display: grid;
    width: 45%;
    max-width: 35rem;
    gap: 1.5rem;

    h1 {
      max-width: 25rem;
    }

    & button {
      width: 80%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  & .text-content p {
    width: 75%;
  }

  @media (max-width: 992px) {
    padding: 0;
    flex-direction: column-reverse;
    padding: 1rem;

    & .text-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      width: auto;
      text-align: center;
    }
  }
`
