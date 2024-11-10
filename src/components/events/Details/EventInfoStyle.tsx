import styled from 'styled-components'

export const EventInfo = styled.div`
  flex: 2;
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    max-height: 300px;
    border-radius: 8px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .description {
    margin-top: 20px;
    width: 100%;

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
    }
  }
`
