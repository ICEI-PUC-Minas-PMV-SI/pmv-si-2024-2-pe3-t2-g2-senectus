import styled from 'styled-components'

export const TextareaStyle = styled.div`
  & label[data-slot='label'] {
    color: ${({ theme }) => theme.color.textColor} !important;
  }

  & div[data-slot='input-wrapper'] {
    border: 2px solid ${({ theme }) => theme.color.secondaryColor} !important;
  }

  & .input-icon {
    color: ${({ theme }) => theme.color.primaryColor} !important;
  }

  & textarea[data-slot='input'] {
    height: 6.18rem !important;
  }

  & .text-danger,
  & .group-data-[invalid='true']:text-danger {
    color: rgb(239 68 68);
  }
`
