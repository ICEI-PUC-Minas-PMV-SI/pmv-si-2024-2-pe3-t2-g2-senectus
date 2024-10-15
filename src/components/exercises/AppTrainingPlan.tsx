import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { TrainingPlanStyle } from './TrainingPlanStyle'
import { RandomExercisesSeedService } from '@core/services/RandomExercisesSeedService'
import { useEffect, useRef, useState } from 'react'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { useCalendar } from '../../hooks/useCalendar'
import { AppTrainingPlanMenuStyle } from './AppTrainingPlanMenuStyle'
import { v4 as uuid } from 'uuid'
import { format } from 'date-fns'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { AppPagination } from '@components/common/Pagination/AppPagination'

interface AppMenuProps {
  exercises: CollectionEventsOnDay<ExerciseEntity>
}

function AppMenu({ exercises }: AppMenuProps) {
  const now = new Date()
  const listRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(exercises.events.length / 4))

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(exercises.events.length / 4))
  }, [exercises])

  return (
    <AppTrainingPlanMenuStyle>
      <section className="text" ref={listRef}>
        <h2>Lista de exercícios</h2>
        <p>
          Confira o que temos para{' '}
          {now.getDate() === exercises.monthDay
            ? 'hoje'
            : `o dia ${exercises.monthDay}`}
          :
        </p>
      </section>
      <ul className="events">
        {exercises.events.slice(page * 4, (page + 1) * 4).map((item) => (
          <li key={uuid()}>
            <button>
              <span className={item.level}></span>
              <div>
                <h3>{item.name}</h3>
                <p>Marcado para às {format(item.dateInMilli, 'HH:mm')}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {total !== 1 && (
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
    </AppTrainingPlanMenuStyle>
  )
}

export function AppTrainingPlan() {
  const [day, setDays] = useCalendar<ExerciseEntity>()

  useEffect(() => {
    setDays(RandomExercisesSeedService.exec(100))
  }, [setDays])

  return (
    <TrainingPlanStyle>
      <h2>Plano de treino</h2>
      <p>
        Consulte o seu plano de treino criado pelo seu profissional favorito!
      </p>
      <AppResponsiveCalendar
        list={day}
        onOpenMenu={(item) => <AppMenu exercises={item} />}
      />
    </TrainingPlanStyle>
  )
}
