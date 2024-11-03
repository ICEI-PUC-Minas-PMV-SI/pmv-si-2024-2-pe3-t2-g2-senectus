import styled from 'styled-components'

export const ProfessionalConfirmBuildMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;

  @media (min-width: 1000px) {
    align-items: start;
  }

  & .list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: fit-content;
    gap: 2rem;
  }

  & #exercise-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & .li-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      justify-content: start;
      text-align: start;
      align-items: start;
      padding: 0.5rem 0.75rem;
      border-radius: ${({ theme }) => theme.border.radius.md};
      border-bottom: 2px solid ${({ theme }) => theme.border.color.default};
      background-color: ${({ theme }) => theme.color.primaryBgColor};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.color.onHoverPrimaryBgColor};
      }
    }
  }

  & .pagination {
    place-self: center;
  }
`
