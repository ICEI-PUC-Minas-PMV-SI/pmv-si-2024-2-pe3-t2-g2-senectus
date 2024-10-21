import { AppSearchBar } from '@components/common/Inputs/SearchBar/AppSearchBar'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ExerciseListStyle } from './ExerciseListStyle'
import { v4 as uuid } from 'uuid'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExerciseRepo } from '@core/repositories/ExerciseRepo'

interface AppExerciseListProps {
  categoryId: string
  exercises: ExerciseEntity[]
}

export function AppExerciseList(props: AppExerciseListProps) {
  const [searchedExercises, setSearchedExercises] = useState(props.exercises)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(searchedExercises.length / 8))

  const onSearch = (value: string) => {
    if (value.length <= 0) return setSearchedExercises(props.exercises)
    const res = ExerciseRepo.findExercisesByMatches(props.categoryId, value)
    setSearchedExercises(res)
  }

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(searchedExercises.length / 8))
  }, [searchedExercises, setSearchedExercises])

  return (
    <ExerciseListStyle>
      <div id="input-wrapper">
        <AppSearchBar
          fullWidth
          placeholder="Insira o nome do exercício"
          onChange={onSearch}
        />
      </div>

      <ul id="exercise-list">
        {searchedExercises.slice(page * 8, (page + 1) * 8).map((item) => (
          <li key={uuid()}>
            <Link href={item.href!} className="exercise-card">
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
