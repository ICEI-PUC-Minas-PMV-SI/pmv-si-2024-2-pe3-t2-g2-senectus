import AppButtonActionRect from '../Buttons/AppButtonActionRect'
import AppSearchBar from '../SearchBar/AppSearchBar'
import AppSearchAndFilterProps from './props/AppSearchAndFilterProps'
import { AppSearchAndFilterContainer } from './styles/AppSearchAndFilterStyles'

export default function AppSearchAndFilter({
  onFilterClick
}: AppSearchAndFilterProps) {
  return (
    <AppSearchAndFilterContainer>
      <AppSearchBar
        placeholder="Insira o nome do seu cliente."
        onInputChanged={(value: string) => console.log('Input value:', value)}
      />

      <AppButtonActionRect
        id="filter-button"
        title="Filtrar"
        onClick={onFilterClick}
      />
    </AppSearchAndFilterContainer>
  )
}
