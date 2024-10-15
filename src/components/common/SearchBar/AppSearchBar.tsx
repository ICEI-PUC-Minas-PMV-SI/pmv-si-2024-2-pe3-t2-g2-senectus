import { useState } from 'react'
import {
  AppSearchBarContainer,
  AppSearchBarInput
} from './styles/AppSearchBarStyles'
import AppSearchBarProps from './props/AppSearchBarProps'
import { SearchIcon } from './resources/AppSearchIcon'

export default function AppSearchBar({
  placeholder,
  onInputChanged
}: AppSearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  const onValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    setInputValue(newValue)
    onInputChanged(newValue)
  }

  return (
    <AppSearchBarContainer>
      <SearchIcon className="search-icon" />

      <AppSearchBarInput
        placeholder={placeholder}
        value={inputValue}
        onChange={onValueChanged}
      />
    </AppSearchBarContainer>
  )
}
