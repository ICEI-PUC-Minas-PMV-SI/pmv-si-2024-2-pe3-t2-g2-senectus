import { AppSearchBar } from '@components/common/Inputs/SearchBar/AppSearchBar'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ExerciseListStyle } from './ExerciseListStyle'
import { v4 as uuid } from 'uuid'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface AppExerciseListProps {
  exercises: ExerciseEntity[]
}

export function AppExerciseList(props: AppExerciseListProps) {
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(props.exercises.length / 8))

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(props.exercises.length / 8))
  }, [props.exercises])

  return (
    <ExerciseListStyle>
      <div id="input-wrapper">
        <AppSearchBar
          fullWidth
          placeholder="Insira o nome do exercício"
          onChange={() => {}}
        />
      </div>

      <ul id="exercise-list">
        {props.exercises.slice(page * 8, (page + 1) * 8).map((item) => (
          <li key={uuid()}>
            <Link href={item.href} className="exercise-card">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={80}
                height={80}
              />
              <div className="text">
                <span></span>
                <small>{item.name}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <AppPagination
        id="exercise-pagination"
        total={total}
        page={page + 1}
        onChange={(page) => {
          setPage(page - 1)
        }}
      />
    </ExerciseListStyle>
  )
}
