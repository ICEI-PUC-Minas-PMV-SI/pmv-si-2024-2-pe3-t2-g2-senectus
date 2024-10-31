import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps
} from '@nextui-org/autocomplete'
import { ReactNode } from 'react'
import { AutocompleteInputStyle } from './AutocompleteInputStyle'

interface AppAutocompleteInputProps
  extends Omit<AutocompleteProps, 'label' | 'children'> {
  label: string
  icon?: ReactNode
  options: string[]
}

export function AppAutocompleteInput({
  label,
  icon,
  options,
  ...props
}: AppAutocompleteInputProps) {
  return (
    <AutocompleteInputStyle>
      <Autocomplete
        radius="sm"
        labelPlacement="outside"
        color="secondary"
        variant="bordered"
        label={label}
        startContent={<span className="input-icon">{icon}</span>}
        listboxProps={{
          emptyContent: 'Nenhum resultado encontrado.'
        }}
        {...props}
      >
        {options.map((option) => (
          <AutocompleteItem key={option}>{option}</AutocompleteItem>
        ))}
      </Autocomplete>
    </AutocompleteInputStyle>
  )
}
