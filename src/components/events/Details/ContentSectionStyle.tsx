import styled from 'styled-components'

export const ContentSection = styled.div`
  display: flex;
  width: fit-content;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
