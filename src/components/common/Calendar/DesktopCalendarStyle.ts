import styled from 'styled-components'

export const DesktopCalendarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(29rem, 70vw, 50rem);

  & .side-bar-wrapper {
    display: flex;
    justify-content: end;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;

    .side-bar {
      display: grid;
      grid-template-rows: 5rem 1fr;
      padding: 5rem 2rem 1rem 2rem;
      width: 50vw;
      height: 100vh;
      background-color: white;
      box-shadow: ${({ theme }) => theme.shadow.md};

      & .content {
        overflow-y: scroll;
      }

      & header {
        width: 100%;
        display: flex;
        justify-content: end;
        font-size: 1.2rem;
      }
    }
  }

  & .calendar-days {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: clamp(29rem, 70vw, 50rem);
    background-color: white;
    padding-top: 2rem;
    font-weight: thin;

    & p {
      font-size: ${({ theme }) => theme.font.xs};
      text-align: center;
      width: 100%;
      min-width: 3rem;
    }
  }

  table {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

    & tbody {
      display: grid;
      & tr {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;

        & td {
          width: 100%;
          min-width: 3rem;
          height: 7rem;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          text-align: center;
          background-color: transparent;
          & .btn-disabled:hover {
            cursor: default;
          }
          & .btn-enabled {
            transition: background-color 0.2s;

            &:hover {
              background-color: ${({ theme }) =>
                theme.color.onHoverPrimaryBgColor};
            }
          }

          & .available-events-btn {
            display: grid;
            grid-template-rows: 2rem 1fr;
            grid-template-columns: 1fr;
            width: 100%;
            height: 100%;
            border: none;
            padding-right: 0.5rem;

            & .day-text,
            & .day-number {
              place-self: start;
              align-self: start;
              padding-left: 0.5rem;
              padding-top: 0.5rem;
            }

            & .day-number {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`
