import styled from 'styled-components'

export const TrainingPlanMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & .pagination {
    place-self: center;
  }

  & .events {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 26rem;

    & li .exercise-card:hover {
      background-color: ${({ theme }) => theme.color.onHoverSecondaryBgColor};
    }

    & li .exercise-card,
    & li.exercise-card {
      display: flex;
      gap: 1rem;
      width: 100%;
      height: 5.85rem;
      text-align: start;
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.color.secondaryBgColor};
      transition: background-color 0.2s;

      & span {
        width: 1rem;
        height: 100%;

        &.easy {
          background-color: ${({ theme }) => theme.color.levels.easy};
        }
        &.medium {
          background-color: ${({ theme }) => theme.color.levels.medium};
        }
        &.hard {
          background-color: ${({ theme }) => theme.color.levels.hard};
        }
      }

      & .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
        height: 100%;
        overflow-y: hidden;

        & h3 {
          font-size: 1rem;
        }
        & .text-content {
          width: 100%;
          height: 100%;
          font-size: ${({ theme }) => theme.font.sm};
          & small.pending {
            color: ${({ theme }) => theme.color.levels.hard};
          }
        }
      }
    }
  }

  @media (min-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
