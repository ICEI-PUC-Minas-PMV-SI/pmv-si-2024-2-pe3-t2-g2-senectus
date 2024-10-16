import AppButtonActionRect from '@components/common/Buttons/AppButtonActionRect'
import { AppSearchBar, AppSearchBarProps } from '../SearchBar/AppSearchBar'
import { AppSearchAndFilterContainer } from './styles/AppSearchAndFilterStyles'

interface AppSearchAndFilterProps {
  onFilterClick: () => void
  onChange: Pick<AppSearchBarProps, 'onChange'>['onChange']
  placeholder: string
}

export function AppSearchAndFilter(props: AppSearchAndFilterProps) {
  return (
    <AppSearchAndFilterContainer>
      <AppSearchBar placeholder={props.placeholder} onChange={props.onChange} />

      <AppButtonActionRect
        id="filter-button"
        title="Filtrar"
        onClick={props.onFilterClick}
      />
    </AppSearchAndFilterContainer>
  )
}
