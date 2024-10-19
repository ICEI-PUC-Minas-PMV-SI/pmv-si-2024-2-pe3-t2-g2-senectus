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
    display: flex;
    width: 40vw;
    justify-content: center;
    place-self: center;
  }

  & .events {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 26rem;
    & li button {
      display: flex;
      gap: 1rem;
      width: 100%;
      height: 5.5rem;
      text-align: start;
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.color.secondaryBgColor};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverSecondaryBgColor};
      }

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

      & div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;

        & p {
          font-size: ${({ theme }) => theme.font.sm};
        }
      }
    }
  }

  @media (min-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
