import { AppSearchBar } from '../SearchBar/AppSearchBar'
import { AppSearchAndFilterContainer } from './AppSearchAndFilterStyles'
import {
  AppSelectRect,
  AppSelectRectProps
} from '@components/common/Selects/AppSelectRect'
import { useState, useEffect } from 'react'

interface OnFilterQuery {
  filter: string
  key?: string
}

interface OnChangeQuery {
  key: string
  filter?: string
}

interface AppSearchAndFilterProps {
  onFilterClick: (q: OnFilterQuery) => void
  onChange: (q: OnChangeQuery) => void
  placeholder: string
  options: Pick<AppSelectRectProps, 'options'>['options']
}

export function AppSearchAndFilter(props: AppSearchAndFilterProps) {
  const [filter, setFilter] = useState<string>('')
  const [key, setKey] = useState('')

  useEffect(() => {
    props.onFilterClick({
      filter,
      key: key.length <= 0 ? undefined : key
    })
  }, [filter, setFilter, key])

  return (
    <AppSearchAndFilterContainer>
      <AppSearchBar
        placeholder={props.placeholder}
        onChange={(key) => {
          setKey(key)
          props.onChange({
            key,
            filter: filter.length <= 0 ? undefined : filter
          })
        }}
      />

      <AppSelectRect
        placeholder="Filtrar"
        ariaLabel="Filtro de pesquisa"
        divWrapperProps={{
          className: 'filter'
        }}
        options={props.options}
        value={filter}
        setValue={setFilter}
      />
    </AppSearchAndFilterContainer>
  )
}
