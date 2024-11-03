import { ComponentProps, ReactNode } from 'react'
import { InternalContainerStyle } from './InternalContainerStyle'

interface AppInternalContainrProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function AppInternalContainer({
  children,
  ...props
}: AppInternalContainrProps) {
  return <InternalContainerStyle {...props}>{children}</InternalContainerStyle>
}
