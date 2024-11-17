import styled from 'styled-components'

export const SelectOutlineStyle = styled.div`
  & div[data-slot='base'] {
    width: 100%;
  }

  & label[data-slot='label'],
  & div[data-slot='value'],
  & svg[data-slot='selectorIcon'] {
    color: ${({ theme }) => theme.color.textColor} !important;
  }

  & button[data-slot='trigger'] {
    box-shadow: none !important;
    border: 2px solid ${({ theme }) => theme.color.secondaryColor} !important;
    height: 2.5rem !important;
    min-height: 2.5rem !important;
  }

  & .outline-btn-label {
    display: grid;
    gap: 0.3rem;
    width: 100%;
    font-size: 14px;

    & .label {
      display: flex;
      & span {
        margin-left: 2px;
        --tw-text-opacity: 1;
        color: hsl(
          var(--nextui-danger) /
            var(--nextui-danger-opacity, var(--tw-text-opacity))
        );
      }
    }
    & button {
      display: flex;
      justify-content: start;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.color.secondaryColor};
      border-radius: 0.5rem;
      width: 100%;
      height: 3rem;
      text-align: start;
      padding-left: 0.255rem;
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
      font-size: 0.875rem;

      & span {
        padding-inline-end: 0.495rem;
        padding-inline-start: 0.495rem;
      }
    }
  }

  & span {
    color: ${({ theme }) => theme.color.secondaryColor};
  }
  & .icon {
    color: ${({ theme }) => theme.color.primaryColor};
  }
`
