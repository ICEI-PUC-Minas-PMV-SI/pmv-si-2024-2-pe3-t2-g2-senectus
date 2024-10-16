import styled from 'styled-components'

export const InternalLinkStyle = styled.div`
  width: min-content;
  background-color: transparent;
  outline-color: ${({ theme }) => theme.color.primaryColor};
  outline-offset: 0.25rem;
  outline-width: 2px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.onHoverTextColor};
    cursor: pointer;
  }
`
