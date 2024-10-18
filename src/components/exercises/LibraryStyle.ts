import styled from 'styled-components'

export const LibraryStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 1rem;

  & #exercise-lib {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .horizontal-lib-cards {
      display: flex;
      gap: 1rem;

      @media (max-width: 715px) {
        display: grid;
      }
    }

    & .lib-card {
      display: grid;
      width: 100%;
      height: 11rem;
      border: 1px solid ${({ theme }) => theme.border.color.default};
      position: relative;

      & img {
        width: 100%;
        height: 11rem;
        position: absolute;
        object-fit: cover;
      }

      & .text {
        position: absolute;
        z-index: 10;
        font-weight: 500;
        background-color: ${({ theme }) => theme.color.primaryBgColorOp};
        padding: 0.85rem 1.75rem;
        width: 100%;
        height: 11rem;
        display: flex;
        align-items: center;
        place-items: end;
        gap: 0.48rem;

        & p {
          font-size: 1rem;
        }
        & span {
          height: 1.45rem;
          width: 2px;
          background-color: ${({ theme }) => theme.color.secondaryColor};
        }
      }
    }
  }
`
