import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppCheckbox } from '@components/common/CheckBox/AppCheckbox'
import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ProfessionalExercisesSelectorStyle } from './ProfessionalExercisesSelectorStyle'
import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

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
          <li key={uuid()}>
            <Link href="/" className="exercise-card">
              <Image
                src="/img/exercises/balance-exercise.png"
                alt="Pessoa se exercitando"
                width={80}
                height={80}
                priority
              />
              <div className="content">
                <div className="text-wrapper">
                  <span></span>
                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
            <AppCheckbox
              className="checkbox"
              aria-label="Selecionar exercício"
            />
          </li>
        ))}
      </ul>

      <div id="actions">
        <AppPagination total={10} page={1} />

        <div className="btn-wrapper">
          <AppButtonActionRect
            text="Criar"
            onClick={() => props.onSelectedExercises(exercises)}
            fullWidth
          />
        </div>
      </div>
    </ProfessionalExercisesSelectorStyle>
  )
}
