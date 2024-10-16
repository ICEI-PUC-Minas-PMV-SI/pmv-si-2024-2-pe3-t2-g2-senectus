import { ComponentProps, useState } from 'react'
import {
  AppSearchBarContainer,
  AppSearchBarInput
} from './styles/AppSearchBarStyles'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export interface AppSearchBarProps
  extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChange: (value: string) => void
}

export function AppSearchBar({ onChange, ...props }: AppSearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  const onInternalChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value

    setInputValue(newValue)
    onChange(newValue)
  }

  return (
    <AppSearchBarContainer>
      <span className="search-icon">
        <FaMagnifyingGlass />
      </span>

      <AppSearchBarInput
        value={inputValue}
        onChange={onInternalChangeValue}
        {...props}
      />
    </AppSearchBarContainer>
  )
}
