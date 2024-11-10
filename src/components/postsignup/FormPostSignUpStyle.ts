import styled from 'styled-components'

export const FormPostSignUpStyle = styled.div`
  display: grid;
  grid-template-columns: 67% 1fr;
  height: 100vh;
  overflow: hidden;

  #forms {
    display: grid;
    grid-template-rows: 10rem 28rem;
    grid-template-columns: 1fr;
    align-items: start;
    padding-top: 5rem;
    place-content: start;
    padding-left: 6rem;
    padding-right: 8rem;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    place-self: center;
  }

  & #form-content {
    width: fit-content;
  }

  #radio-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4rem;
    gap: 0.5rem;

    & p {
      margin-bottom: 1.5rem;
      width: 75%;
    }

    & div[role='presentation'] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 0.25rem;

      @media (min-width: 960px) {
        font-size: 0.75rem !override;
      }

      & label:nth-child(1) {
        grid-area: 1;
      }

      & label:nth-child(2) {
        grid-area: 2;
      }

      & label:nth-child(3) {
        grid-area: 3;
      }

      & label:nth-child(4) {
        grid-area: 1;
      }

      & label:nth-child(5) {
        grid-area: 2;
      }

      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 0.25re;
      }
    }
  }

  #buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 4rem;

    & a {
      width: 100%;
    }
  }

  & #wallpaper {
    width: 100%;
    height: 100vh;

    & img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
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

  @media (max-width: 400px) {
    flex-direction: column;
    height: auto;

    #forms {
      width: 100%;
      padding: 2rem;
    }

    #buttons {
      width: 100%;
      margin-left: 0;
      gap: 0.5rem;
      flex-direction: column;
    }
  }
`
