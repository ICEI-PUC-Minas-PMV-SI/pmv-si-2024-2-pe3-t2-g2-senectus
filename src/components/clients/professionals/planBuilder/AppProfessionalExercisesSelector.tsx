import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ProfessionalExercisesSelectorStyle } from './ProfessionalExercisesSelectorStyle'
import { v4 as uuid } from 'uuid'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/NotificationService'
import { AppProfessionalExerciseListItem } from './AppProfessionalExerciseListItem'

interface AppProfessionalExerciseSelectorProps {
  onSelectedExercises: (exercises: ExerciseEntity[]) => void
}

const exercises: ExerciseEntity[] = []
for (let i = 0; i < 8; i++) {
  exercises.push(
    new ExerciseEntity({
      name: 'Exercício de cadeira',
      level: 'easy',
      dateInMilli: Date.now()
    })
  )
}

export function AppProfessionalExercisesSelector(
  props: AppProfessionalExerciseSelectorProps
) {
  const selectedExercises: ExerciseEntity[] = []

  const onSelectExerciseChange = (value: boolean, exercise: ExerciseEntity) => {
    if (value) selectedExercises.push(exercise)
    else {
      const index = selectedExercises.findIndex(
        (item) => item.name === exercise.name
      )
      if (index >= 0) selectedExercises.splice(index, 1)
    }
  }

  const onSubmit = () => {
    if (selectedExercises.length <= 0)
      return NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        'Você deve selecionar pelo menos um exercício.'
      )
    props.onSelectedExercises(selectedExercises)
  }

  return (
    <ProfessionalExercisesSelectorStyle>
      <div id="input-wrapper">
        <AppSearchAndFilter
          onFilterClick={() => {}}
          options={[
            'Alongamento',
            'Equilíbrio',
            'Fortalecimento',
            'Mobilidade'
          ]}
          placeholder="Insira o nome do exercício."
          onChange={() => {}}
        />
      </div>

      <ul id="exercise-list">
        {exercises.map((item) => (
          <AppProfessionalExerciseListItem
            key={uuid()}
            exercise={item}
            onSelectChange={(value) => onSelectExerciseChange(value, item)}
          />
        ))}
      </ul>

      <div id="actions">
        <AppPagination total={10} page={1} />

        <div className="btn-wrapper">
          <AppButtonActionRect text="Próximo" onClick={onSubmit} fullWidth />
        </div>
      </div>
    </ProfessionalExercisesSelectorStyle>
  )
}
