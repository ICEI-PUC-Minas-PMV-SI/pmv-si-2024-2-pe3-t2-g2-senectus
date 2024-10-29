import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ProfessionalExercisesSelectorStyle } from './ProfessionalExercisesSelectorStyle'
import { v4 as uuid } from 'uuid'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'
import { AppProfessionalExerciseListItem } from './AppProfessionalExerciseListItem'
import { useState, useEffect } from 'react'
import { AppSearchNotFound } from '@components/common/SearchPlaceholders/AppSearchNotFound'
import { ExerciseSearchService } from '@core/services/exercises/ExerciseSearchService'
import { SelectedExerciseSearchService } from '@core/services/exercises/SelectedExerciseSearchService'
import { SelectSingleExerciseService } from '@core/services/plan/professional/SelectSingleExerciseService'

interface AppProfessionalExerciseSelectorProps {
  preSelectedExercises?: ExerciseEntity[]
  onSelectedExercises: (exercises: ExerciseEntity[]) => void
}

export function AppProfessionalExercisesSelector(
  props: AppProfessionalExerciseSelectorProps
) {
  const [search, setSearch] = useState<ExerciseEntity[]>(
    ExerciseSearchService.exec()
  )
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(search.length * 8))
  const [selectedExercises, setSelectedExercises] = useState<ExerciseEntity[]>(
    props.preSelectedExercises ?? []
  )

  const onSelectExerciseChange = (
    isSelected: boolean,
    exercise: ExerciseEntity
  ) => {
    SelectSingleExerciseService.exec(isSelected, exercise, setSelectedExercises)
  }

  const onSubmit = () => {
    if (selectedExercises.length <= 0)
      return NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        'Você deve selecionar pelo menos um exercício.'
      )
    props.onSelectedExercises(selectedExercises)
  }

  const handleSearch = (filter?: string, key?: string) => {
    if (filter === 'Selecionados')
      return setSearch(
        SelectedExerciseSearchService.exec(selectedExercises, key)
      )
    setSearch(ExerciseSearchService.exec(key, filter))
  }

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(search.length / 8))
  }, [search, setSearch])

  return (
    <ProfessionalExercisesSelectorStyle>
      <div id="input-wrapper">
        <AppSearchAndFilter
          onFilterClick={(q) => handleSearch(q.filter, q.key)}
          options={[
            'Selecionados',
            'Alongamento',
            'Equilíbrio',
            'Fortalecimento',
            'Mobilidade'
          ]}
          placeholder="Insira o nome do exercício."
          onChange={(q) => handleSearch(q.filter, q.key)}
        />
      </div>

      {search.length > 0 && (
        <ul id="exercise-list">
          {search.slice(page * 8, (page + 1) * 8).map((item) => {
            const searchedExercise = selectedExercises.find((exercise) => {
              return exercise.id === item.id
            })

            return (
              <AppProfessionalExerciseListItem
                key={uuid()}
                exercise={item}
                isSelected={Boolean(searchedExercise)}
                onSelectChange={(value) => onSelectExerciseChange(value, item)}
              />
            )
          })}
        </ul>
      )}

      {search.length <= 0 && (
        <AppSearchNotFound text="Nenhum exercício encontrado." />
      )}

      <div id="actions">
        {search.length > 8 && total > 1 && (
          <AppPagination
            total={total}
            page={page + 1}
            onChange={(page) => {
              setPage(page - 1)
            }}
          />
        )}

        {search.length <= 8 && <AppPagination total={1} page={1} />}

        <div className="btn-wrapper">
          <AppButtonActionRect text="Próximo" onClick={onSubmit} fullWidth />
        </div>
      </div>
    </ProfessionalExercisesSelectorStyle>
  )
}
