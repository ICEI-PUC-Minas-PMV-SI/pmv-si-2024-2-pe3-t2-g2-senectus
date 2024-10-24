import styled from 'styled-components'

export const DashboardHeaderStyle = styled.header`
  display: flex;
  justify-content: start;
  gap: 1rem;
  padding-bottom: 0.25rem;
  overflow-x: scroll;
  position: relative;

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

  & ul {
    display: flex;
    place-self: start;
    gap: 1rem;
    width: fit-content;
    height: auto;

    & li a {
      display: flex;
      flex-direction: column;
      align-items: start;
      position: relative;
      width: clamp(13rem, 20vw, 15rem);
      height: 7rem;
      padding: 1rem;
      gap: 1rem;
      border: 1px solid ${({ theme }) => theme.border.color.default};
      border-radius: ${({ theme }) => theme.border.radius.md};
      background-color: ${({ theme }) => theme.color.primaryBgColor};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverPrimaryBgColor};
      }

      & span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        width: 100%;
        height: 0.5rem;
        background-color: ${({ theme }) => theme.color.secondaryColor};
        border-radius: ${({ theme }) => {
          const r = theme.border.radius.md
          return `${r} ${r} 0 0`
        }};
      }

      & .card-content {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: start;
        flex-direction: column;
        gap: 1rem;
        & .card-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & .card-icon {
            color: ${({ theme }) => theme.color.primaryColor};
            font-size: 1rem;
          }
        }

        & h3 {
          font-size: 1rem;
        }

        & small {
          padding-right: 1.5rem;
        }
      }
    }
  }
`
