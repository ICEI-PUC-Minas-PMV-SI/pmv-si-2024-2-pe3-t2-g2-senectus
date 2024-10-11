import styled from 'styled-components'

export const MenuButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.textColor};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.onHoverTextColor};
  }
`
