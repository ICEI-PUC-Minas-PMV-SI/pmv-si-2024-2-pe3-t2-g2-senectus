import styled from 'styled-components'

export const ExerciseSelectorModalStyle = styled.div`
  font-size: ${({ theme }) => theme.font.sm};
  gap: 0.5rem;
  margin-bottom: 1rem;

  & .options {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.5rem;
    align-items: start;

    color: ${({ theme }) => theme.color.invertedTextColor};

    & .common-btn {
      background-color: ${({ theme }) => theme.color.primaryColor};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverPrimaryColor};
      }
    }

    & .outline-btn {
      border: 2px solid ${({ theme }) => theme.color.primaryColor};
      color: ${({ theme }) => theme.color.primaryColor};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryColor} !important;
        color: ${({ theme }) => theme.color.invertedTextColor};
      }
    }
  }
`
