import { Button, ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'

interface AppButtonActionRectOutlineProps
  extends Omit<
    ButtonProps,
    'endContent' | 'startContent' | 'color' | 'children'
  > {
  isLoading?: boolean
  text?: string
  icon?: ReactNode
}

export function AppButtonActionRectOutline({
  size = 'sm',
  isLoading,
  text,
  icon,
  ...props
}: AppButtonActionRectOutlineProps) {
  return (
    <Button
      color="primary"
      variant="ghost"
      size={size}
      isLoading={isLoading}
      endContent={icon}
      style={{ border: '2px solid' }}
      {...props}
    >
      {text}
    </Button>
  )
}