import { ComponentProps, useState } from 'react'
import { AppSearchBarContainer, AppSearchBarInput } from './AppSearchBarStyles'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export interface AppSearchBarProps
  extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChange: (value: string) => void
  fullWidth?: boolean
}

export function AppSearchBar({
  onChange,
  fullWidth,
  ...props
}: AppSearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  const onInternalChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value

    setInputValue(newValue)
    onChange(newValue)
  }

  return (
    <AppSearchBarContainer
      style={fullWidth ? { width: '100%', minWidth: '100%' } : {}}
    >
      <span className="search-icon">
        <FaMagnifyingGlass />
      </span>

      <AppSearchBarInput
        value={inputValue}
        onChange={onInternalChangeValue}
        style={fullWidth ? { width: '100%', minWidth: '100%' } : {}}
        {...props}
      />
    </AppSearchBarContainer>
  )
}
