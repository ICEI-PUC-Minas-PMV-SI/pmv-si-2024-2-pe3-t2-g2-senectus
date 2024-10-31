import styled from 'styled-components'

export const Container = styled.div`
  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .disconect-zone {
    & button {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      height: 2rem;
      color: ${({ theme }) => theme.color.primaryColor};
      border-radius: ${({ theme }) => theme.border.radius.md};
      font-size: 0.875rem;
      background-color: ${({ theme }) => theme.color.secondaryBgColorOp};
      transition: background-color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.color.invertedTextColor} !important;
        background-color: ${({ theme }) => theme.color.primaryColor} !important;
      }
    }
  }

  .remove-zove {
    & button {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      height: 2rem;
      color: ${({ theme }) => theme.color.levels.hard};
      border-radius: ${({ theme }) => theme.border.radius.md};
      font-size: 0.875rem;
      background-color: ${({ theme }) => theme.color.secondaryBgColorOp};
      transition: background-color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.color.invertedTextColor} !important;
        background-color: ${({ theme }) => theme.color.levels.hard} !important;
      }
    }
  }
`

export const Card = styled.div`
  margin: 1.5rem auto;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.secondaryBgColorOp};
  padding: 3rem;
  border-radius: 0.5rem 0 0 0.5rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const WarningText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.levels.hard};
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bgDangerZone};
  width: 40%;
  border-radius: 0 0.5rem 0.5rem 0;
`

export const Icon = styled.div`
  color: ${({ theme }) => theme.color.levels.hard};
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
`
