import styled from 'styled-components'

export const AppointmentsRoutineCalendarMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;

  @media (min-width: 1000px) {
    align-items: start;
  }

  & #list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: fit-content;
    gap: 2rem;
  }

  & #appointments-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & .li-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: start;
      text-align: start;
      align-items: start;
      padding: 0.5rem 0.75rem;
      border-radius: ${({ theme }) => theme.border.radius.md};
      border-bottom: 2px solid ${({ theme }) => theme.border.color.default};

      & .appointment-item-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        gap: 2rem;

        @media (max-width: 400px) {
          flex-direction: column;
          gap: 1rem;
          place-self: start;
        }
      }
    }
  }

  & .pagination {
    place-self: center;
  }
`
