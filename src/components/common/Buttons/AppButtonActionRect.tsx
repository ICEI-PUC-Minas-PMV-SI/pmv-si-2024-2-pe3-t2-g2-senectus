import { Button, ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'

interface AppButtonActionRectProps
  extends Omit<
    ButtonProps,
    'endContent' | 'startContent' | 'color' | 'children'
  > {
  isLoading?: boolean
  text?: string
  icon?: ReactNode
}

export function AppButtonActionRect({
  size = 'sm',
  isLoading,
  text,
  icon,
  ...props
}: AppButtonActionRectProps) {
  return (
    <Button
      color="primary"
      size={size}
      isLoading={isLoading}
      startContent={icon}
      {...props}
    >
      {text}
    </Button>
  )
}
