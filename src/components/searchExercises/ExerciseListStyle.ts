import styled from 'styled-components'

export const ExerciseListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  & #input-wrapper {
    width: 60%;
  }

  @media (max-width: 380px) {
    justify-content: center;
    width: 100%;

    & #input-wrapper {
      width: 100%;
    }
  }

  & #exercise-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    .exercise-card {
      display: grid;
      width: 10rem;
      height: 10rem;
      border: 1px solid ${({ theme }) => theme.border.color.default};
      position: relative;
      transition: 0.2s background-color;
      background-color: ${({ theme }) => theme.color.primaryBgColorOp};

      &:hover {
        background-color: ${({ theme }) => theme.color.secondaryBgColorOp};
      }

      & img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
      }

      & .text {
        position: absolute;
        z-index: 10;
        background-color: ${({ theme }) => theme.color.primaryBgColorOp};
        padding: 1rem 0.75rem;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        place-items: end;
        gap: 0.48rem;

        & small {
          font-size: 0.7rem;
        }
        & span {
          height: 1.2rem;
          width: 2px;
          background-color: ${({ theme }) => theme.color.primaryColor};
        }
      }
    }

    @media (max-width: 780px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 580px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 380px) {
      grid-template-columns: 1fr;
      width: min-content;

      & .exercise-card {
        width: clamp(10rem, 91vw, 20rem);
      }
    }
  }

  & #exercise-pagination {
    place-self: center;
  }
`
