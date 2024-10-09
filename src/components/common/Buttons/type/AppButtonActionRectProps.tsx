export default interface AppButtonActionRectProps {
  id: string
  loading?: boolean
  disabled?: boolean
  backgroundColor?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
  style?: React.CSSProperties
  title: string
  onClick: () => void
}
