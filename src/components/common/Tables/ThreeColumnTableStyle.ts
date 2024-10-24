import styled from 'styled-components'

export const ThreeColumnTableStyle = styled.table`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-radius: ${({ theme }) => theme.border.radius.md};
	border: 2px solid ${({ theme }) => theme.border.color.default};
	border-bottom: none;
	background-color: ${({ theme }) => theme.color.primaryBgColor};

    & .table-start,
    & .table-mid,
    & .table-end {
      height: 100%;
      display: flex;
      align-items: center;
    }

    & .table-start {
      place-self: start;
    }

    & .table-mid {
      place-self: center;

      @media (max-width: 708px) {
        place-self: end;
      }
    }

    & .table-end {
      place-self: end;

      @media (max-width: 708px) {
        display: none;
      }
    }

    & tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      width: 100%;
      padding: 0.25rem 2rem;

      @media (max-width: 708px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    & thead {
      border-bottom: 2px solid ${({ theme }) => theme.border.color.default};

      & th {
        font-weight: 400;
      }
    }

    & tbody {
      display: flex;
      flex-direction: column;

      & .data-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        padding: 0.25rem 2rem;
        width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.border.color.default};
        background-color: ${({ theme }) => theme.color.primaryBgColor};
        transition: background-color 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.color.onHoverPrimaryBgColor};
        }

        @media (max-width: 708px) {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
`
