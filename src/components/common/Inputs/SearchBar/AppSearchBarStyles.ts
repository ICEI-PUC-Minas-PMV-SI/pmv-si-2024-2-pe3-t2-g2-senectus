import styled from 'styled-components'

export const AppSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.md};
  width: fit-content;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.secondaryBgColor};
  position: relative;
  padding-left: 1.8rem;

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
  min-width: fit-content;
  font-size: 0.6rem;
  flex: 1;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: inherit;
  padding: 0.5rem 1rem;
  background-color: inherit;

  @media (min-width: 550px) {
    min-width: 18rem;
  }
`
