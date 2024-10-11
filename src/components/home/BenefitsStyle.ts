import styled from 'styled-components'

export const BenefitsStyle = styled.div`
  display: flex;
  flex-flow: column;

  & .prettify-title {
    text-align: center;
    &::before {
      left: -2%;
      top: 6%;
    }
  }

  & h1 {
    margin-bottom: 5rem;
    place-self: center;
    text-align: center;
  }

  & #benefits-cards {
    display: grid;
    grid-template-areas: 'first second third' 'fourth . fifth';
    grid-gap: 1.5rem;
    width: min-content;

    & li {
      display: grid;
      grid-template-rows: 3.21rem 1fr;
      padding: 1.5rem;
      width: clamp(16.75rem, 26.32vw, 20.6875rem);
      height: 17rem;
      background-color: ${({ theme }) => theme.color.secondaryColor};
      border-radius: 12px;
      gap: 2rem;

      & .card-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }

      & .text {
        display: flex;
        flex-direction: column;

        h2 {
          font-weight: 500;
          margin-bottom: 0.35rem;
        }

        p {
          margin-bottom: 1rem;
        }
      }

      & span {
        display: grid;
        background-color: ${({ theme }) => theme.color.invertedBgColor};
        border-radius: ${({ theme }) => theme.border.radius.md};
        color: white;
        font-size: 2rem;
        place-content: center;
        text-align: center;
        width: clamp(3.21rem, 16.5vw, 4rem);
        height: clamp(3.21rem, 16.5vw, 4rem);
      }

      &:nth-child(4) {
        grid-area: fourth;
        width: 153%;
        max-width: 33.05rem;
      }

      &:nth-child(5) {
        grid-area: fifth;
        grid-column: 3;
        width: 153%;
        max-width: 33.05rem;
        position: relative;
        right: 53%;
      }
    }
  }

  @media (max-width: 1000px) and (min-width: 800px) {
    & #benefits-cards {
      grid-template-areas: 'first second' 'third fourth' 'fifth .';

      & li {
        width: 40.5vw;
        height: 20rem;

        &:nth-child(4) {
          width: 40.5vw;
          height: 20rem;
          grid-area: unset;
          max-width: unset;
        }

        &:nth-child(5) {
          grid-area: unset;
          grid-column: unset;
          max-width: unset;
          width: 40.5vw;
          height: 20rem;
          position: unset;
          right: unset;
        }
      }
    }
  }

  @media (max-width: 800px) {
    & #benefits-cards {
      grid-template-areas: none;
      display: flex;
      flex-direction: column;
      place-self: center;

      & li {
        width: 80.5vw;
        height: auto;
        justify-content: center;
        grid-template-rows: 4rem 1fr;

        & .card-header {
          justify-content: space-between;
        }

        & span {
          width: 4rem;
          height: 4rem;
          place-self: center;
        }

        &:nth-child(4) {
          width: 80.5vw;
          height: auto;
          grid-area: unset;
          max-width: unset;
        }

        &:nth-child(5) {
          grid-area: unset;
          grid-column: 3;
          max-width: unset;
          width: 80.5vw;
          height: auto;
          position: unset;
          right: unset;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    & #benefits-cards li:nth-child(5) {
      right: 48%;
    }
  }
`
