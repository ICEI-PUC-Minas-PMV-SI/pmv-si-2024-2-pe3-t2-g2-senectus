import styled from 'styled-components'

export const AppSelectModalStyle = styled.div`
  font-size: ${({ theme }) => theme.font.sm};

  & .options {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.25rem;
    max-height: 24rem;
    overflow-y: scroll;
    align-items: start;

    & button {
      padding: 1rem;
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${({ theme }) => theme.border.radius.md};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverPrimaryBgColor};
      }
    }
  }
`
