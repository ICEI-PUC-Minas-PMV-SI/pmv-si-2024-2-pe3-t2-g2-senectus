import styled from 'styled-components'

export const ProfessionalConfirmBuilderStyle = styled.div`
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

  & #calendar-menu {
    height: 40rem;

    @media (min-width: 1000px) {
      height: auto;
    }
  }

  & #exercise-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    & .back-btn {
      width: 75vw;
      max-width: 7.44rem;
    }
  }

  & #submit-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & #finish-creation {
      width: 100%;
    }

    @media (min-width: 400px) {
      flex-direction: row;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      gap: 4rem;
      margin-top: 1rem;
    }
  }
`
