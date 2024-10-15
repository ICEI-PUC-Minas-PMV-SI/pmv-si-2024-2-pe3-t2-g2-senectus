import styled from 'styled-components'

const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondaryColor};
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: border-box;
`

const StyledSearchIcon = styled.svg`
  width: 50%;
  height: 50%;
  padding: 4px 4px 4px 4px;
  box-sizing: border-box;
`

export const SearchIcon = (props) => (
  <SearchIconContainer>
    <StyledSearchIcon
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </StyledSearchIcon>
  </SearchIconContainer>
)
