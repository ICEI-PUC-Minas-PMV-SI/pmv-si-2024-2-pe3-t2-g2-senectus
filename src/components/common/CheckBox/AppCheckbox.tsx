import { Checkbox, CheckboxProps } from '@nextui-org/checkbox'
import { CheckboxStyle } from './CheckboxStyle'

interface AppCheckboxProps extends CheckboxProps {}

export function AppCheckbox(props: AppCheckboxProps) {
  return (
    <CheckboxStyle>
      <Checkbox color="primary" radius="none" {...props} />
    </CheckboxStyle>
  )
}
