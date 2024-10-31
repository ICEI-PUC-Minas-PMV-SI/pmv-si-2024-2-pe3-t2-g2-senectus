import { Checkbox, CheckboxProps } from '@nextui-org/checkbox'

interface AppCheckboxProps extends CheckboxProps {}

export function AppCheckbox(props: AppCheckboxProps) {
  return <Checkbox color="primary" radius="none" {...props} />
}
