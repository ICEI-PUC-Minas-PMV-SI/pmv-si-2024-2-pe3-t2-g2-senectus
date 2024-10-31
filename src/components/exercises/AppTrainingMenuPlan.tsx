import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { useEffect, useRef, useState } from 'react'
import { TrainingPlanMenuStyle } from './TrainingPlanMenuStyle'
import { v4 as uuid } from 'uuid'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import Link from "next/link"

interface AppTrainingMenuPlanProps {
  exercises: CollectionEventsOnDay<ExerciseEntity>
}

export function AppTrainingMenuPlan({ exercises }: AppTrainingMenuPlanProps) {
  const now = new Date()
  const listRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(exercises.events.length / 4))

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(exercises.events.length / 4))
  }, [exercises])

  return (
    <TrainingPlanMenuStyle>
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
            <Link href={item.href!}>
              <span className={item.level}></span>
              <div>
                <h3>{item.name}</h3>
                <p>Marcado para às {format(item.dateInMilli, 'HH:mm')}</p>
              </div>
            </Link>
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
    </TrainingPlanMenuStyle>
  )
}
