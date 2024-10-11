import { Button, ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'

interface IAppButtonActionRect extends Omit<ButtonProps, "endContent" | "startContent" | "color"> {
  isLoading?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
}

export function AppButtonActionRect({
  size = "sm", 
  isLoading, 
  children,
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
      {children}
    </Button>
  )
}

