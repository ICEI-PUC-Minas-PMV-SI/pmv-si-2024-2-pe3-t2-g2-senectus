import styled from 'styled-components'

export const ExercisePlayerStyle = styled.div`
  display: flex;
  margin-bottom: 4rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    width: min-content;
  }

  & #instructions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid ${({ theme }) => theme.border.color.default};
    padding: 1rem 2rem;

    @media (max-width: 420px) {
      padding: 1rem 0;
      border: none;
    }

    & h2 {
      font-weight: 500;
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding-left: 1.2rem;
      padding-right: 0.25rem;
      height: 15rem;
      padding-bottom: 2rem;
      overflow-y: scroll;

      & li {
        list-style: circle;
      }

      @media (max-width: 420px) {
        padding-right: 0;
        padding-bottom: 0;
        overflow-y: unset;
        height: auto;
      }
    }

    & #instructions-actions {
      display: flex;
      justify-content: space-between;
      padding-left: 1.2rem;
      gap: 1rem;
      width: 80%;

      & span {
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.color.invertedBgColor};
      }

      @media (max-width: 420px) {
        width: auto;
        & span {
          display: none;
        }
      }

      @media (max-width: 300px) {
        flex-direction: column;
      }
    }
  }

  & #video {
    display: flex;
    flex-direction: column;
    & iframe {
      width: clamp(10rem, 60vw, 36rem);
      height: auto;
      aspect-ratio: 16 / 9;
      border: 1px solid ${({ theme }) => theme.border.color.default};
      @media (max-width: 650px) {
        width: 80vw;
      }

      @media (max-width: 420px) {
        width: 100%;
      }
    }

    & #video-footer {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 2rem;
      width: 100%;
      height: 3rem;
      background-color: ${({ theme }) => theme.color.primaryBgColor};
      border: 1px solid ${({ theme }) => theme.border.color.default};
      padding: 0.25rem 1.5rem;
      & #dificulty,
      & #duration {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      & #duration #time-card-icon {
        color: #d9a3ff;
      }

      & #dificulty {
        & .easy {
          color: ${({ theme }) => theme.color.levels.easy};
        }
        & .medium {
          color: ${({ theme }) => theme.color.levels.medium};
        }
        & .hard {
          color: ${({ theme }) => theme.color.levels.hard};
        }
      }
    }
  }
`
