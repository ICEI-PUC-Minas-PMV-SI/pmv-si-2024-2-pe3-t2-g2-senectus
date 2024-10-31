import { AppSearchBar } from '../SearchBar/AppSearchBar'
import { AppSearchAndFilterContainer } from './AppSearchAndFilterStyles'
import {
  AppSelectRect,
  AppSelectRectProps
} from '@components/common/Selects/AppSelectRect'

interface AppSearchAndFilterProps {
  onFilterClick: (q: string) => void
  onChange: (q: string) => void
  placeholder: string
  options: Pick<AppSelectRectProps, 'options'>['options']
}

export function AppSearchAndFilter(props: AppSearchAndFilterProps) {
  return (
    <AppSearchAndFilterContainer>
      <AppSearchBar
        placeholder={props.placeholder}
        onChange={(key) => {
          props.onChange(key)
        }}
      />

      <AppSelectRect
        placeholder="Filtrar"
        ariaLabel="Filtro de pesquisa"
        divWrapperProps={{
          className: 'filter'
        }}
        options={props.options}
        onChange={props.onFilterClick}
      />
    </AppSearchAndFilterContainer>
  )
}
