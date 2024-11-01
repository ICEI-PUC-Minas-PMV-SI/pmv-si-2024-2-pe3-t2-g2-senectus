import { Input, InputProps } from '@nextui-org/input'
import { DefaultInputStyle } from './DefaultInputStyle'
import { ReactNode } from 'react'

interface AppDefaultInput extends Omit<InputProps, 'label'> {
  label: string
  icon?: ReactNode
}

export function AppDefaultInput({ label, icon, ...props }: AppDefaultInput) {
  return (
    <DefaultInputStyle>
      <Input
        radius="sm"
        labelPlacement="outside"
        color="secondary"
        variant="bordered"
        startContent={<span className="input-icon">{icon}</span>}
        label={label}
        {...props}
      />
    </DefaultInputStyle>
  )
}
