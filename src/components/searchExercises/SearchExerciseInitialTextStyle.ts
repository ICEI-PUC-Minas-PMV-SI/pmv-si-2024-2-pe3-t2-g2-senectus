import styled from 'styled-components'

export const SearchExerciseInitialTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    width: 75%;

    @media (max-width: 750px) {
      width: auto;
    }
  }
`
