export default class AppButtonActionRectProps {
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

  constructor(appButtonActionRectProps: AppButtonActionRectProps) {
    this.id = appButtonActionRectProps.id
    this.loading = appButtonActionRectProps.loading
    this.disabled = appButtonActionRectProps.disabled
    this.backgroundColor = appButtonActionRectProps.backgroundColor
    this.style = appButtonActionRectProps.style
    this.title = appButtonActionRectProps.title
    this.onClick = appButtonActionRectProps.onClick
  }
}
