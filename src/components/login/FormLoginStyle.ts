import styled from 'styled-components'

export const FormLoginStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & #wallpaper {
    width: 100%;
    height: 100vh;

    & img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }

  & #forms {
    display: grid;
    grid-template-rows: 6rem 28rem;
    grid-template-columns: 1fr;
    align-items: start;
    padding-top: 3rem;
    place-content: start;
    padding-left: 6rem;
    padding-right: 8rem;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    place-self: center;

    & #form-content {
      display: flex;
      flex-direction: column;
      & h1 {
        margin-bottom: 0.5rem;
      }

      & form {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 2rem;

        & button {
          margin-top: 1rem;
        }
      }

      & #create-account-link {
        display: flex;
        justify-content: center;
        width: 100%;
        place-self: center;
        & a {
          margin-left: 0.25rem;
          outline-color: ${({ theme }) => theme.color.primaryColor};
          outline-offset: 0.25rem;
          outline-width: 2px;
          transition: color 0.2s;
          color: ${({ theme }) => theme.color.primaryColor};
          transition: color 0.2s;

          &:hover {
            color: ${({ theme }) => theme.color.onHoverPrimaryColor};
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    & #forms {
      width: 100%;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    & #wallpaper {
      display: none;
    }
  }
`