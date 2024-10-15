import styled from 'styled-components'

export const AppSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 1rem 1rem 0rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  width: fit-content;
`

export const AppSearchBarInput = styled.input`
  width: fit-content;
  font-size: 0.6rem;
  flex: 1;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: inherit;
  padding: 0.5rem 1rem;

  @media (max-width: 400px) {
    font-size: 0.4rem;
  }
`
