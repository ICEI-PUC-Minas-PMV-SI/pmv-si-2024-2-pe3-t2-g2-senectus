import { Button } from '@nextui-org/button'

import AppButtonActionRectProps from './props/AppButtonActionRectProps'
import theme from '../../../themes/theme'

function AppButtonActionRect({
  id,
  loading = false,
  disabled = false,
  backgroundColor = 'primary',
  style = {
    marginTop: '0px',
    marginBottom: '0px',
    marginRight: '0px',
    marginLeft: '0px',
    fontSize: theme.font.base
  },
  title,
  onClick
}: AppButtonActionRectProps) {
  return (
    <Button
      id={id}
      color={backgroundColor}
      size="md"
      isLoading={loading}
      isDisabled={disabled}
      style={style}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default AppButtonActionRect
