import { v4 as uuid } from 'uuid'
import Link from 'next/link'
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
    link?: string
  }>
}

export function AppThreeColumnTable(props: ThreeColumnTableProps) {
  return (
    <ThreeColumnTableStyle>
      <thead>
        <tr>
          <th className="table-start">{props.header.firstCol}</th>
          <th className="table-mid">{props.header.secondCol}</th>
          <th className="table-end">{props.header.thirdCol}</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <td key={uuid()}>
            {row.link ? (
              <Link href={row.link} className="data-row" role="button">
                <p className="table-start">{row.firstCol}</p>
                <p className="table-mid">{row.secondCol}</p>
                <p className="table-end">{row.thirdCol}</p>
              </Link>
            ) : (
              <div className="data-row">
                <p className="table-start">{row.firstCol}</p>
                <p className="table-mid">{row.secondCol}</p>
                <p className="table-end">{row.thirdCol}</p>
              </div>
            )}
          </td>
        ))}
      </tbody>
    </ThreeColumnTableStyle>
  )
}
