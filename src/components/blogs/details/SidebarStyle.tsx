import styled from 'styled-components'

export const Sidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 730px) {
    width: 100%;
  }
`
