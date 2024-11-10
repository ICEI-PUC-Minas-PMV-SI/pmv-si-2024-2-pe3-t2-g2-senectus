import styled from 'styled-components'

export const CheckboxStyle = styled.div`
  & label {
    background-color: ${({ theme }) => theme.color.secondaryBgColor};
    transition: 0.2s background-color;
    padding: 0 !important;
    margin: 0 !important;
    &:hover {
      background-color: ${({ theme }) => theme.color.onHoverSecondaryBgColor};
    }
  }
`
