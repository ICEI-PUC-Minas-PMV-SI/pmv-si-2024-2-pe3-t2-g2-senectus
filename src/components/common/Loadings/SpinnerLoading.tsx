import { FaSpinner } from 'react-icons/fa6'
import { IconBaseProps } from 'react-icons'
import { theme } from '../../../themes/theme'

interface Props extends IconBaseProps {}

export function SpinnerLoading({ className, ...props }: Props) {
  return (
    <FaSpinner
      className={`animate-spin ${className ?? ''}`}
      color={theme.color.primaryColor}
      {...props}
    />
  )
}
