import styled from 'styled-components'
import Link from 'next/link'

export const EventItemContainer = styled(Link)`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 20px;
  width: 100%;
  min-height: 100px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    background-color: #f0f0f0;
  }
`
