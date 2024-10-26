import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { v4 as uuid } from 'uuid'
import { useMemo, useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import { ProfessionalConfirmBuildMenuStyle } from './ProfessionalConfirmBuildMenuStyle'
import { AppPagination } from '@components/common/Pagination/AppPagination'

interface AppProfessionalConfirmBuildMenuProps {
  exercises: CollectionEventsOnDay<ExerciseEntity>
  openExerciseMenu: (exercises: ExerciseEntity[]) => void
}

export function AppProfessionalConfirmBuildMenu({
  exercises,
  openExerciseMenu
}: AppProfessionalConfirmBuildMenuProps) {
  const sortedDateKeys = useMemo(() => {
    const dateKeys: Record<string, ExerciseEntity[]> = {}
    exercises.events.forEach((item) => {
      if (dateKeys[`${item.dateInMilli}`])
        dateKeys[`${item.dateInMilli}`].push(item)
      else dateKeys[`${item.dateInMilli}`] = [item]
    })

    return dateKeys
  }, [exercises])

  const parsedExercises = useMemo(() => {
    const exerciseNamesPerDate: Record<string, string> = {}

    for (const key in sortedDateKeys) {
      const exerciseNames = sortedDateKeys[key].map((item) => item.name)

      for (let i = 0; i < exerciseNames.length; i++) {
        let matches = 0
        for (let j = 0; j < exerciseNames.length; j++) {
          if (exerciseNames[j] === exerciseNames[i] && ++matches >= 2) {
            exerciseNames.splice(j, 1)
            --j
          }
        }
      }

      if (exerciseNames.length === 2)
        exerciseNamesPerDate[key] = exerciseNames.join(' e ')
      else if (exerciseNames.length > 2)
        exerciseNamesPerDate[key] =
          `${exerciseNames[0]}, ${exerciseNames[1]} e mais ${exerciseNames.length - 2}`
      else exerciseNamesPerDate[key] = exerciseNames[0]
    }

    return Object.entries(exerciseNamesPerDate).map(([k, v]) => ({
      exercises: sortedDateKeys[k],
      sortedExerciseName: v,
      date: new Date(parseInt(k))
    }))
  }, [exercises])

  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(parsedExercises.length / 5))
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(parsedExercises.length / 5))
  }, [parsedExercises])

  return (
    <ProfessionalConfirmBuildMenuStyle ref={listRef}>
      <h2>Horários</h2>
      <div className="list-container">
        <ul id="exercise-list">
          {parsedExercises.slice(page * 5, (page + 1) * 5).map((container) => {
            return (
              <li key={uuid()}>
                <button
                  className="li-item"
                  onClick={() => openExerciseMenu(container.exercises)}
                >
                  <p>
                    <b>Tipos</b>: {container.sortedExerciseName}
                  </p>
                  <p>
                    <b>Horário</b>: {format(container.date, 'dd')} de{' '}
                    {format(container.date, 'MMMM', { locale })} de{' '}
                    {format(container.date, 'yyyy')} às{' '}
                    {format(container.date, 'HH:mm')}
                  </p>
                </button>
              </li>
            )
          })}
        </ul>

        {total > 1 && parsedExercises.length > 5 && (
          <AppPagination
            className="pagination"
            total={total}
            page={page + 1}
            onChange={(page) => {
              setPage(page - 1)
              listRef?.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          />
        )}
      </div>
    </ProfessionalConfirmBuildMenuStyle>
  )
}
