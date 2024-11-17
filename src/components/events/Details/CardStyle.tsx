import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  max-height: 150px;
  width: 100%;
  height: fit-content;
  position: relative;
  line-height: 1.4;
  &::before {
    content: '';
    width: calc(100% + 2px);
    height: 5px;
    background-color: #7d4ed0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    top: 0;
    left: -1px;
  }

  .separator {
    height: 1px;
    background-color: #e0e0e0;
    margin: 10px 0;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 5px;
    text-decoration: none;
  }
`
