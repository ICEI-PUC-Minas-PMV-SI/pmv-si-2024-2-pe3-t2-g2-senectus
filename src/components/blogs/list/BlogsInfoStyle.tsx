import styled from 'styled-components';

export const BlogsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }

  .name-and-role {
    display: flex;
    flex-direction: column;
    margin-left: -5px;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0;
  }

  .role {
    font-size: 0.9rem;
    color: #999;
    margin: 0;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
  }

  .timestamp {
    font-size: 0.8rem;
    color: #999;
    margin-top: -3px;
  }
`;
