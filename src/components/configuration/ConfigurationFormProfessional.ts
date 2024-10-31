import styled from 'styled-components'
import { Button } from '@nextui-org/button'

export const Container = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: end;
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledButton = styled(Button)`
  margin-left: 1rem;
  margin-top: 1.5rem;
  flex-shrink: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.color.primaryColor};
  border-radius: ${({ theme }) => theme.border.radius.md};
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.color.secondaryColor};
  transition: background-color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.color.invertedTextColor} !important;
    background-color: ${({ theme }) =>
      theme.color.onHoverPrimaryColor} !important;
  }
`

export const AddServiceButton = styled.div`
  margin-top: 1.5rem;
  & button {
    flex-shrink: 0;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.color.invertedTextColor};
    border-radius: ${({ theme }) => theme.border.radius.md};
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.color.primaryColor};
    transition: background-color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.color.invertedTextColor} !important;
      background-color: ${({ theme }) =>
        theme.color.onHoverPrimaryColor} !important;
    }
  }
`
