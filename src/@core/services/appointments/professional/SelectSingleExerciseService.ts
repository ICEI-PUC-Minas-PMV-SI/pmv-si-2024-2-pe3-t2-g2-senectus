import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { Dispatch, SetStateAction } from 'react'

export class SelectSingleExerciseService {
  static exec(
    isSelected: boolean,
    exercise: ExerciseEntity,
    setSelectedExercises: Dispatch<SetStateAction<ExerciseEntity[]>>
  ) {
    if (isSelected)
      return setSelectedExercises((prev) => {
        const arr = [...prev]
        arr.push(exercise)
        return arr
      })

    setSelectedExercises((prev) => {
      const arr = [...prev]
      const index = arr.findIndex((item) => item.name === exercise.name)
      if (index >= 0) arr.splice(index, 1)
      return arr
    })
  }
}
