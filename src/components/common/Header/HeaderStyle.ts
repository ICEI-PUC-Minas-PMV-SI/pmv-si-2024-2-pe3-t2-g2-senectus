import styled from 'styled-components'

export const HeaderStyle = styled.header`
  z-index: 100;
  position: fixed;
  display: grid;
  grid-template-columns: 110px 1fr 9.5rem;
  width: 100vw;
  padding: 1rem 4.75rem;
  align-items: center;
  justify-content: space-between;
  height: clamp(4rem, 2.25vh, 4.85rem);
  background-color: ${({ theme }) => theme.color.primaryBgColor};
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);

  ul {
    max-width: 28rem;
    display: flex;
    gap: 4rem;
    place-self: center;
  }

  & #btn-connect {
    width: clamp(6.5rem, 17.5vw, 9.5rem);
  }
`
