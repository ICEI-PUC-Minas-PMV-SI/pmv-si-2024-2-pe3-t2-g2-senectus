import { Input, InputProps } from '@nextui-org/input'
import { DefaultInputStyle } from './DefaultInputStyle'
import { CSSProperties, ReactNode } from 'react'

interface AppDefaultInput extends Omit<InputProps, 'label'> {
  label: string
  icon?: ReactNode
  wrapperStyle?: CSSProperties
}

export function AppDefaultInput({
  label,
  icon,
  wrapperStyle,
  ...props
}: AppDefaultInput) {
  return (
    <DefaultInputStyle style={wrapperStyle}>
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
