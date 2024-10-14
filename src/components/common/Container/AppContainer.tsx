import { ReactNode } from 'react'
import { ContainerStyle } from './ContainerStyle'
import { CSSProperties } from 'styled-components'

interface ContainerProps {
  children: ReactNode
  style?: CSSProperties
}

export function AppContainer({ children, style }: ContainerProps) {
  return (
    <ContainerStyle>
      <div className="container" style={style}>
        {children}
      </div>
    </ContainerStyle>
  )
}
