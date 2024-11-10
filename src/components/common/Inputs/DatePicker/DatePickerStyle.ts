import styled from 'styled-components'

export const DatePickerStyle = styled.div`
  & .date-picker {
    & div[data-slot='inner-wrapper'] {
      flex-direction: row-reverse !important;
    }

    & div[data-slot='input-wrapper'] {
      padding-left: 0.255rem !important;
    }

    & button[data-slot='selector-button'] {
      justify-content: start !important;
      min-width: unset;
      width: min-content;
      padding-inline-end: 0.495rem;
      padding-inline-start: 0.495rem;
    }

    & span:not(.text-danger),
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
