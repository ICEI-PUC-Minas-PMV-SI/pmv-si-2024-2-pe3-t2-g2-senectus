import styled from 'styled-components'

export const MobileCalendarStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-self: center;
  justify-content: center;
  width: 100%;

  & .info {
    & .not-found {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      text-align: center;

      & img {
        width: clamp(4rem, 60vw, 14rem);
      }

      & h3 {
        margin-top: 2rem;
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }

  & .calendar {
    display: flex;
    justify-content: center;
    width: 100%;
    & .carousel-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.color.primaryColor};
      color: ${({ theme }) => theme.color.invertedTextColor};
      width: 1.4rem;
      height: 6.25rem;
      align-self: end;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverPrimaryColor};
      }
    }
    & .carousel-btn.left {
      border-radius: ${({ theme }) =>
        `${theme.border.radius.md} 0 0 ${theme.border.radius.md}`};
    }
    & .carousel-btn.right {
      border-radius: ${({ theme }) =>
        `0 ${theme.border.radius.md} ${theme.border.radius.md} 0`};
    }

    & ul {
      display: flex;
      width: 18rem;
      overflow-x: scroll;
      scroll-behavior: smooth;

      @media (min-width: 640px) {
        width: 30rem;
      }

      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: #838080;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #555555;
      }

      & li {
        display: grid;
        grid-template-rows: 2rem 1fr;
        grid-template-columns: 1fr;
        width: 6rem;
        & .day {
          display: grid;
          width: 100%;
          text-align: center;
          align-content: center;
        }
        & button {
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-rows: 1.5rem 1fr;
          grid-template-columns: 1fr;
          width: 6rem;
          height: 6rem;
          transition: background-color 0.2s;
          &:hover {
            background-color: ${({ theme }) =>
              theme.color.onHoverPrimaryBgColor};
          }

          & .day-text,
          & .day-number {
            place-self: start;
            align-self: start;
            padding-top: 0.5rem;
          }

          & .day-text {
            text-align: center;
            font-size: 0.65rem;
          }

          & .day-number {
            font-weight: 500;
            padding-left: 0.5rem;
          }
        }
      }
    }
  }
`
