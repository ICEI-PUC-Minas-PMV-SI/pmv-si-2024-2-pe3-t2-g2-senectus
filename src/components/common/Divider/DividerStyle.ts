import styled from 'styled-components'

export const DividerStyle = styled.div`
  .bg-divider {
    stroke: ${({ theme }) => theme.color.divider.stroke};
    fill: ${({ theme }) => theme.color.divider.fill};
    stroke-width: 0;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    width: 100%;
    height: 2px;
  }
`
