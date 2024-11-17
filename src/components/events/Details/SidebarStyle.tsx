import styled from 'styled-components'

export const Sidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 14rem;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`
