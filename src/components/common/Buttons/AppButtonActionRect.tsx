import { Button } from '@nextui-org/button'
import theme from '../../../themes/theme'
import AppButtonActionRectProps from './type/AppButtonActionRectProps'

const AppButtonActionRect = ({
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
}: AppButtonActionRectProps) => {
  return (
    <Button
      id={id}
      color={backgroundColor}
      size="md"
      isLoading={loading}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default AppButtonActionRect
