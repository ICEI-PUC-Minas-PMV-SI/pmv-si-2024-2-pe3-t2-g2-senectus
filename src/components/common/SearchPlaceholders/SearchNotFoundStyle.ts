import styled from 'styled-components'

export const SearchNotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  gap: 2rem;

  & img {
    width: clamp(10rem, 40vw, 18rem);
    height: auto;
  }
`
