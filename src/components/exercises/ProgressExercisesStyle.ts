import styled from 'styled-components'

export const ProgressExercisesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .list-infos {
    display: flex;
    gap: 1rem;

    @media (max-width: 712px) {
      flex-direction: column;
    }
  }

  & ul {
    gap: 1rem;
    display: grid;

    &#secondary-exercise-infos {
      display: grid;
      grid-template-columns: 9rem 9rem;
    }

    & li {
      &.medium-card {
        display: flex;
        width: 19rem;
        height: 6.7rem;
        padding: 0.75rem;
        border-radius: ${({ theme }) => theme.border.radius.md};
        border: 1px solid ${({ theme }) => theme.border.color.default};
      }

      &#next-exercise {
        position: relative;
        & img {
          width: 19rem;
          height: 6.7rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: scale-down;
        }

        & #next-exercise-btn {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 19rem;
          height: 6.7rem;
          padding: 0.75rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
          background-color: ${({ theme }) => theme.color.primaryBgColorOp};
          transition: 0.2s background-color;

          & h3 {
            font-size: 1rem;
          }

          &:hover {
            background-color: ${({ theme }) => theme.color.secondaryBgColorOp};
          }
          & small {
            place-self: end;
          }
        }
      }

      &#progress-card {
        justify-content: space-evenly;
        gap: 1rem;
        align-items: start;

        & .card-text {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      }
      &.small-card {
        display: flex;
        flex-direction: column;
        width: 9rem;
        height: 6.7rem;
        padding: 0.75rem;
        border-radius: ${({ theme }) => theme.border.radius.md};
        border: 1px solid ${({ theme }) => theme.border.color.default};
        justify-content: space-between;

        & .header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;

          & #calendar-card-icon {
            color: #55a9f2;
          }
          & #time-card-icon {
            color: #d9a3ff;
          }
          & #exercise-card-icon {
            color: #7acf25;
          }
          & #warn-card-icon {
            color: #f25555;
          }
        }
        & .infos {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`
