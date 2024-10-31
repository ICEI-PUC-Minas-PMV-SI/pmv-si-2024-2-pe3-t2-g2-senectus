import { Divider } from '@nextui-org/react'
import { DividerStyle } from './DividerStyle'

interface ContainerProps {
  style?: React.CSSProperties
  className?: string
}

export function AppDivider({ style, className }: ContainerProps) {
  return (
    <DividerStyle style={style} className={className}>
      <Divider></Divider>
    </DividerStyle>
  )
}
