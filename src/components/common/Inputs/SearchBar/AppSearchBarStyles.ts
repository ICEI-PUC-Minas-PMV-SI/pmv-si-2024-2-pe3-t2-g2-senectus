import styled from 'styled-components'

export const AppSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.md};
  height: 2rem;
  background-color: ${({ theme }) => theme.color.secondaryBgColor};
  position: relative;
  padding-left: 1.8rem;
  width: 100%;

  @media (min-width: 550px) {
    width: fit-content;
  }

  & .search-icon {
    position: absolute;
    z-index: 1;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    display: grid;
    height: 100%;
    width: 2rem;
    justify-content: center;
    align-content: center;
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.border.radius.md};
    background-color: ${({ theme }) => theme.color.secondaryColor};
    color: ${({ theme }) => theme.color.textColor};
  }
`

export const AppSearchBarInput = styled.input`
  min-width: 100%;
  flex: 1;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: inherit;
  padding: 0.5rem 1rem;
  background-color: inherit;
  font-size: 0.75rem;

  @media (min-width: 550px) {
    min-width: 18rem;
  }
`
