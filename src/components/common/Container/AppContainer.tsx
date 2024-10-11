import { ReactNode } from 'react'
import { ContainerStyle } from './ContainerStyle'
import { CSSProperties } from 'styled-components'

interface IContainerProps {
  children: ReactNode
  style?: CSSProperties
}

export function AppContainer({ children, style }: IContainerProps) {
  return (
    <ContainerStyle>
      <div className="container" style={style}>
        {children}
      </div>
    </ContainerStyle>
  )
}
