import { ExerciseEntity } from '@core/models/ExerciseEntity'

export interface ExerciseCategoryProps {
  id: string
  name: string
  image: {
    src: string
    alt: string
  }
  href: string
  exercises: ExerciseEntity[]
}

export class ExerciseRepo {
  private static exercises: ExerciseCategoryProps[] = [
    {
      id: 'alongamento',
      name: 'Alongamento',
      href: 'exercises/alongamento',
      image: {
        src: '/img/exercises/generic-category-image.jpg',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({ name: 'Treino de perna', level: 'easy' })
          )
        return exercises
      })()
    },
    {
      id: 'equilibrio',
      name: 'Equilíbrio',
      href: 'exercises/equilibrio',
      image: {
        src: '/img/exercises/generic-category-image.jpg',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({ name: 'Treino de perna', level: 'easy' })
          )
        return exercises
      })()
    },
    {
      id: 'fortalecimento',
      name: 'Fortalecimento',
      href: 'exercises/fortalecimento',
      image: {
        src: '/img/exercises/generic-category-image.jpg',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({ name: 'Treino de perna', level: 'easy' })
          )
        return exercises
      })()
    },
    {
      id: 'mobilidade',
      name: 'Mobilidade',
      href: 'exercises/mobilidade',
      image: {
        src: '/img/exercises/generic-category-image.jpg',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({ name: 'Treino de perna', level: 'easy' })
          )
        return exercises
      })()
    }
  ]

  static getCategories(): ExerciseCategoryProps[] {
    return ExerciseRepo.exercises
  }

  static getExerciseByCategory(id: string) {
    return ExerciseRepo.exercises.find((item) => item.id == id)
  }
}
