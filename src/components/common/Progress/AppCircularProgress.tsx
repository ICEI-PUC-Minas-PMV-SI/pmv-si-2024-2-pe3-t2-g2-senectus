import { CircularProgress, CircularProgressProps } from '@nextui-org/progress'

interface AppCircularProgressProps extends CircularProgressProps {}

export function AppCircularProgress({
  size,
  ...props
}: AppCircularProgressProps) {
  return <CircularProgress color="primary" size={size ?? 'md'} {...props} />
}
