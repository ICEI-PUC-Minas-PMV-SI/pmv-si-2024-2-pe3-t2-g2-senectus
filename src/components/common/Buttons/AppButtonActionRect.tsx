import { Button, ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'

interface IAppButtonActionRect
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
}: IAppButtonActionRect) {
  return (
    <Button
      color="primary"
      size={size}
      isLoading={isLoading}
      endContent={icon}
      {...props}
    >
      {text}
    </Button>
  )
}
