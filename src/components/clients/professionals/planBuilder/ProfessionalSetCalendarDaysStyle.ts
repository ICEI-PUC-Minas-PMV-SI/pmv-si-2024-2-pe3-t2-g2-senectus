import styled from 'styled-components'

export const ProfessionalSetCalendarDaysStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30vw 5vw 65vw;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 3rem;
    margin-bottom: 8rem;
    max-width: 22rem;

    & img {
      display: none;
    }

    & .separator {
      display: none;
    }
  }

  & #inputs {
    display: flex;
    flex-direction: column;
    padding-right: 2rem;

    @media (max-width: 900px) {
      padding-right: 0;
    }

    & #fields {
      display: grid;
      grid-template-columns: 1fr 3rem;
      width: 100%;
      margin-bottom: 0.75rem;

      & #input-date-picker {
        width: 100%;
      }

      & #add {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: ${({ theme }) => theme.border.radius.md};
        color: ${({ theme }) => theme.color.primaryColor};
        font-size: 1.25rem;
        text-align: center;
        place-items: center;
        place-self: end;
        background-color: ${({ theme }) => theme.color.secondaryColor};
        transition: background-color 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.color.onHoverSecondaryColor};
        }
        &.invalid {
          margin-bottom: 1.25rem;
        }
      }
    }

    & img {
      margin-top: 3rem;
      place-self: center;
      width: clamp(13rem, 30vw, 15rem);
      height: auto;
    }
  }

  & .separator {
    width: 2px;
    height: 25rem;
    background-color: ${({ theme }) => theme.border.color.default};
  }

  & #date-board {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 22rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.color.primaryBgColor};
    border: 1px solid ${({ theme }) => theme.border.color.default};
    border-radius: ${({ theme }) => theme.border.radius.md};

    @media (max-width: 900px) {
      width: 100%;
      height: 15rem;
    }

    & span {
      height: 0.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.color.primaryColor};
      border-radius: ${({ theme }) => {
        const r = theme.border.radius.md
        return `${r} ${r} 0 0`
      }};
      position: absolute;
      z-index: 10;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      overflow-y: scroll;
      width: 100%;
      padding: 2rem 1rem;

      & li {
        display: flex;
        gap: 0.15rem;
        width: 100%;
        position: relative;
        justify-content: center;
        align-items: center;

        & button {
          margin-bottom: 0.75rem;
          color: rgb(239 68 68);
          font-size: 0.75rem;
        }
      }
    }
  }
`
