import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  min-height: 90px;
  width: fit-content;
  position: relative;
  font-size: 1.25rem;
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
    font-size: 1.25rem;
  }

  @media (max-width: 730px) and (min-width: 363px) {
    display: flex;
    flex-direction: reverse-row;
    align-items: center;
    justify-content: space-between;

    & .separator {
      height: 100%;
      width: 1px;
    }
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`
