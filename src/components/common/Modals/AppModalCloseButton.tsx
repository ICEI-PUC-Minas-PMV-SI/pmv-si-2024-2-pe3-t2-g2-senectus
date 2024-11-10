import { theme } from '@themes/theme'
import { ComponentProps } from 'react'
import { FaXmark } from 'react-icons/fa6'

interface AppModalCloseButtonProps extends ComponentProps<'button'> {}

export function AppModalCloseButton(props: AppModalCloseButtonProps) {
  return (
    <button
      style={{ fontSize: '1rem', color: theme.color.textColor }}
      {...props}
    >
      <FaXmark />
    </button>
  )
}
