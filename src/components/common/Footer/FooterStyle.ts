import styled from 'styled-components'

export const FooterStyle = styled.footer`
  width: 100vw;
  height: clamp(5rem, 2.5vh, 7.25rem);
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryColor};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0.75rem;

  & span {
    color: ${({ theme }) => theme.color.invertedTextColor};
    font-weight: 100;
    place-self: center;
  }

  & #footer-title {
    display: flex;
    text-align: center;
  }

  & #footer-title h1 {
    color: ${({ theme }) => theme.color.invertedTextColor};
    font-size: 1.25rem;
  }

  & small {
    color: ${({ theme }) => theme.color.invertedTextColor};
  }
`
