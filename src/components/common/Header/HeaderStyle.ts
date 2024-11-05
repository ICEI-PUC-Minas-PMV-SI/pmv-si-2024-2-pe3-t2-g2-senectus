import styled from 'styled-components'

export const HeaderStyle = styled.header`
  z-index: 100;
  position: fixed;
  display: grid;
  grid-template-columns: 110px 1fr 9.5rem;
  width: 100vw;
  padding: 1rem 2.75rem;
  align-items: center;
  justify-content: space-between;
  height: clamp(4rem, 2.25vh, 4.85rem);
  background-color: ${({ theme }) => theme.color.primaryBgColor};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  ul {
    opacity: 1;
    max-width: 28rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    place-self: center;
  }

  & #btn-menu {
    display: none;
  }

  & #btn-connect {
    width: clamp(6.5rem, 17.5vw, 9.5rem);
  }

  & #menu-btn-connect,
  & #menu-btn-config {
    opacity: 0;
    visibility: hidden;
  }

  & #btn-config {
    & .icon {
      color: ${({ theme }) => theme.color.primaryColor};
    }

    width: 100%;
    & a {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      place-self: start;
      gap: 0.5rem;
      width: 100vw;
      max-width: unset;
      height: 0;
      background-color: ${({ theme }) => theme.color.primaryBgColor};
      position: absolute;
      z-index: 100;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      & li {
        visibility: hidden;
      }

      & #menu-btn-connect,
      & #menu-btn-config {
        margin-top: 1.5rem;
      }

      & #menu-btn-config {
        & .icon {
          color: ${({ theme }) => theme.color.primaryColor};
        }

        & div {
          width: 100%;
          & a {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
        }
      }
    }

    & #btn-menu {
      display: grid;
      z-index: 101;

      &.closed #btn-menu-close {
        display: none;
      }

      &.open #btn-menu-open {
        display: none;
      }
    }

    & #header-logo {
      z-index: 101;
    }

    & #btn-connect,
    & #btn-config {
      display: none;
    }
  }
`
