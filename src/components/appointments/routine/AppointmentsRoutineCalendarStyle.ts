import styled from 'styled-components'

export const AppointmentsRoutineCalendarStyle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  margin-bottom: 4rem;
  max-width: 25rem;

  @media (min-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    max-width: unset;
  }
`
