import styled from 'styled-components'

export const AutocompleteInputStyle = styled.div`
  & div[data-slot='input-wrapper'] {
    border: 2px solid ${({ theme }) => theme.color.secondaryColor} !important;

    & label[data-slot='label'] {
      color: ${({ theme }) => theme.color.textColor} !important;
    }
  }

  & .input-icon {
    color: ${({ theme }) => theme.color.primaryColor} !important;
  }

  & .text-dander,
  & .group-data-[invalid='true']:text-danger {
    color: rgb(239 68 68);
  }
`
