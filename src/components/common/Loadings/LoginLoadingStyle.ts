import styled from 'styled-components'

export const LoginLoadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  height: 100%;
  width: 100%;

  & .load {
    font-size: 6rem;
  }

  & h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
`
