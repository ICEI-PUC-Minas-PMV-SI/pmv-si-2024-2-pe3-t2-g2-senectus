import { Textarea, TextAreaProps } from '@nextui-org/input'
import { ReactNode } from 'react'
import { TextareaStyle } from './TextareaStyle'

interface AppTextareaProps extends Omit<TextAreaProps, 'label'> {
  label: string
  icon?: ReactNode
}

export function AppTextarea({ label, icon, ...props }: AppTextareaProps) {
  return (
    <TextareaStyle>
      <Textarea
        radius="sm"
        labelPlacement="outside"
        color="secondary"
        variant="bordered"
        startContent={<span className="input-icon">{icon}</span>}
        label={label}
        {...props}
      />
    </TextareaStyle>
  )
}
