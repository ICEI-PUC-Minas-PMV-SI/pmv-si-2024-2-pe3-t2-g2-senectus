import { AppSearchBar, AppSearchBarProps } from '../SearchBar/AppSearchBar'
import { AppSearchAndFilterContainer } from './AppSearchAndFilterStyles'
import {
  AppSelectRect,
  AppSelectRectProps
} from '@components/common/Selects/AppSelectRect'

interface AppSearchAndFilterProps {
  onFilterClick: (selectedFilter: string) => void
  onChange: Pick<AppSearchBarProps, 'onChange'>['onChange']
  placeholder: string
  options: Pick<AppSelectRectProps, 'options'>['options']
}

export function AppSearchAndFilter(props: AppSearchAndFilterProps) {
  return (
    <AppSearchAndFilterContainer>
      <AppSearchBar placeholder={props.placeholder} onChange={props.onChange} />

      <AppSelectRect
        id="filter-select"
        placeholder="Filtrar"
        options={props.options}
        onFilterChange={props.onFilterClick}
      />
    </AppSearchAndFilterContainer>
  )
}
