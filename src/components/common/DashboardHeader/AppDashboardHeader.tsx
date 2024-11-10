import { ReactNode } from 'react'
import { v4 as uuid } from 'uuid'
import Link from 'next/link'
import { DashboardHeaderStyle } from './DashboardHeaderStyle'

interface AppDashboardHeaderProps {
  options: {
    name: string
    description: string
    href: string
    icon: ReactNode
  }[]
}

export function AppDashboardHeader(props: AppDashboardHeaderProps) {
  return (
    <DashboardHeaderStyle>
      <ul>
        {props.options.map((item) => (
          <li key={uuid()}>
            <Link href={item.href}>
              <span></span>
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.name}</h3>
                  <div className="card-icon">{item.icon}</div>
                </div>
                <small>{item.description}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </DashboardHeaderStyle>
  )
}
