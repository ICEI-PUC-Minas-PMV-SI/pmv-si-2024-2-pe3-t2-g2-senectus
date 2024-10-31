import styled from 'styled-components'

export const DatePickerStyle = styled.div`
  & .date-picker {
    & span:not(.text-danter),
    & div:not(.text-danger) {
      color: ${({ theme }) => theme.color.textColor} !important;
    }

    & span ~ div {
      border: 2px solid ${({ theme }) => theme.color.secondaryColor} !important;
    }

    & .text-danger,
    & .group-data-[invalid='true']:text-danger {
      color: rgb(239 68 68);
    }
  }
`
