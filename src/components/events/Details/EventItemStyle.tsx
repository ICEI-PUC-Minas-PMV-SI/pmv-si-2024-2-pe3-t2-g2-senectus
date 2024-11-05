import styled from 'styled-components';
import Link from 'next/link';

export const EventItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;
  width: 100%; 
  max-width: 100%; 
  min-height: 120px;

  &:hover {
    transform: scale(1.02);
  }
`;
