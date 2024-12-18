import styled from 'styled-components'

export const InternalContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  gap: 3rem;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`
