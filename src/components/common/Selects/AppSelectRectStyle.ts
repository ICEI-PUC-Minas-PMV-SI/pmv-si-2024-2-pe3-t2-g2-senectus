import styled from 'styled-components'

export const AppSelectRectStyle = styled.div`
  width: clamp(8rem, 20vw, 10rem);

  & button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    gap: 0.75rem;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    height: 2rem;
    color: ${({ theme }) => theme.color.primaryColor};
    border-radius: ${({ theme }) => theme.border.radius.md};
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.bgOfPrimaryColor};
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.color.onHoverBgOfPrimaryColor};
    }
  }
`
