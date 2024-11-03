import styled from 'styled-components'

export const AppointmentsFormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  margin-bottom: 4rem;

  & #first-row {
    display: grid;
    grid-gap: 1rem;
  }

  & #second-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    & #second-row {
      gap: 2rem;
    }
  }
`
