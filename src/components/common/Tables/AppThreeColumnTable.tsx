import { v4 as uuid } from 'uuid'
import { ThreeColumnTableStyle } from './ThreeColumnTableStyle'

interface ThreeColumnTableProps {
  header: {
    firstCol: string
    secondCol: string
    thirdCol: string
  }
  rows: Array<{
    firstCol: string
    secondCol: string
    thirdCol: string
    onClick?: (() => void) | undefined
  }>
}

export function AppThreeColumnTable(props: ThreeColumnTableProps) {
  return (
    <ThreeColumnTableStyle>
      <thead>
        <tr className="table-header">
          <th className="table-start">{props.header.firstCol}</th>
          <th className="table-mid">{props.header.secondCol}</th>
          <th className="table-end">{props.header.thirdCol}</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={uuid()}>
            {row.onClick ? (
              <td role="button" className="data-row" onClick={row.onClick}>
                <p className="table-start">{row.firstCol}</p>
                <p className="table-mid">{row.secondCol}</p>
                <p className="table-end">{row.thirdCol}</p>
              </td>
            ) : (
              <td className="data-row">
                <p className="table-start">{row.firstCol}</p>
                <p className="table-mid">{row.secondCol}</p>
                <p className="table-end">{row.thirdCol}</p>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </ThreeColumnTableStyle>
  )
}
