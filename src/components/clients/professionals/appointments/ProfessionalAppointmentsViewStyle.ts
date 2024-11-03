import styled from 'styled-components'

export const ProfessionalAppointmentsViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
  max-width: 25rem;

  @media (min-width: 1000px) {
    gap: 1rem;
    max-width: unset;
  }

  & #calendar-actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;

    & button {
      width: 100%;
    }

    & button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    & .separator {
      display: none;
    }

    @media (max-width: 400px) {
      flex-direction: row;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      gap: 4rem;
      margin-top: 1rem;
    }

    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 8rem 1fr;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      & .separator {
        display: block;
        width: 8rem;
        height: 2px;
        background-color: ${({ theme }) => theme.color.primaryColor};
      }
    }
  }
`
