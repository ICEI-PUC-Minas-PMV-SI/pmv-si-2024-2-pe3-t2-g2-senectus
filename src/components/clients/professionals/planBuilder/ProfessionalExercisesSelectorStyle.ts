import styled from 'styled-components'

export const ProfessionalExercisesSelectorStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 380px) {
    justify-content: center;
    width: 100%;
  }

  & #actions {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    & .btn-wrapper {
      width: clamp(10rem, 30vw, 15rem);
    }

    @media (max-width: 780px) {
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      padding-left: 0;
      padding-right: 0;
    }
  }

  & #exercise-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    & li {
      position: relative;
      & .checkbox {
        position: absolute;
        z-index: 11;
        left: 8.75rem;
        top: 0;
        bottom: 8.75rem;
        right: 0;

        @media (max-width: 381px) {
          left: 93%;
        }

        @media (max-width: 580px) and (min-width: 381px) {
          left: 90%;
        }
      }

      & .exercise-card {
        display: grid;
        width: 10rem;
        height: 10rem;
        border: 1px solid ${({ theme }) => theme.border.color.default};
        position: relative;
        transition: 0.2s background-color;
        background-color: ${({ theme }) => theme.color.primaryBgColorOp};

        &:hover {
          background-color: ${({ theme }) => theme.color.onHoverPrimaryBgColor};
        }

        & img {
          width: 100%;
          height: 100%;
          position: absolute;
          object-fit: contain;
        }

        & .content {
          position: absolute;
          z-index: 10;
          background-color: ${({ theme }) => theme.color.primaryBgColorOp};
          padding: 1rem 0.75rem;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          place-items: end;

          & .text-wrapper {
            display: flex;
            width: 100%;
            align-items: center;
            height: 1rem;
            gap: 0.48rem;

            & small {
              font-size: 0.7rem;
            }
            & span {
              height: 100%;
              width: 2px;
              background-color: ${({ theme }) => theme.color.primaryColor};
            }

            @media (max-width: 959px) {
              height: 3rem;
            }
          }
        }

        @media (max-width: 380px) {
          width: 91vw;
          max-width: 20rem;
        }

        @media (max-width: 580px) and (min-width: 381px) {
          width: 100%;
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
    }
  }

  & #exercise-pagination {
    place-self: center;
  }
`
