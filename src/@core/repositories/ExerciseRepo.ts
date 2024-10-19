import { ExerciseCategoryEntity } from '@core/models/ExerciseCategoryEntity'
import { ExerciseEntity } from '@core/models/ExerciseEntity'

export class ExerciseRepo {
  private static exercises: ExerciseCategoryEntity[] = [
    new ExerciseCategoryEntity({
      name: 'Alongamento',
      image: {
        src: '/img/exercises/stretching-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (function () {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              level: 'easy',
              instructions: [
                'Levante os joelhos de forma leve, caminhando no lugar por 5 minutos.',
                'Estenda um braço para cima, segurando por 10 segundos e troque.',
                'Fique em pé com os pés na largura dos ombros.',
                'Dobre os joelhos lentamente, como se fosse sentar em uma cadeira, e volte à posição de pé. Repita 5 vezes.'
              ],
              video: {
                src: 'https://www.youtube.com/watch?v=28kE5vLW4vM'
              },
              image: {
                src: '/img/exercises/walking-exercise.png',
                alt: 'Pessoa fazendo exercício'
              }
            })
          )
        return exercises
      })()
    }),
    new ExerciseCategoryEntity({
      name: 'Equilíbrio',
      image: {
        src: '/img/exercises/balance-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              level: 'easy',
              instructions: [
                'Levante os joelhos de forma leve, caminhando no lugar por 5 minutos.',
                'Estenda um braço para cima, segurando por 10 segundos e troque.',
                'Fique em pé com os pés na largura dos ombros.',
                'Dobre os joelhos lentamente, como se fosse sentar em uma cadeira, e volte à posição de pé. Repita 5 vezes.'
              ],
              video: {
                src: 'https://www.youtube.com/watch?v=28kE5vLW4vM'
              },
              image: {
                src: '/img/exercises/walking-exercise.png',
                alt: 'Pessoa fazendo exercício'
              }
            })
          )
        return exercises
      })()
    }),
    new ExerciseCategoryEntity({
      name: 'Fortalecimento',
      image: {
        src: '/img/exercises/strengthening-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              level: 'easy',
              instructions: [
                'Levante os joelhos de forma leve, caminhando no lugar por 5 minutos.',
                'Estenda um braço para cima, segurando por 10 segundos e troque.',
                'Fique em pé com os pés na largura dos ombros.',
                'Dobre os joelhos lentamente, como se fosse sentar em uma cadeira, e volte à posição de pé. Repita 5 vezes.'
              ],
              video: {
                src: 'https://www.youtube.com/watch?v=28kE5vLW4vM'
              },
              image: {
                src: '/img/exercises/walking-exercise.png',
                alt: 'Pessoa fazendo exercício'
              }
            })
          )
        return exercises
      })()
    }),
    new ExerciseCategoryEntity({
      name: 'Mobilidade',
      image: {
        src: '/img/exercises/walking-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              level: 'easy',
              instructions: [
                'Levante os joelhos de forma leve, caminhando no lugar por 5 minutos.',
                'Estenda um braço para cima, segurando por 10 segundos e troque.',
                'Fique em pé com os pés na largura dos ombros.',
                'Dobre os joelhos lentamente, como se fosse sentar em uma cadeira, e volte à posição de pé. Repita 5 vezes.'
              ],
              video: {
                src: 'https://www.youtube.com/watch?v=28kE5vLW4vM'
              },
              image: {
                src: '/img/exercises/walking-exercise.png',
                alt: 'Pessoa fazendo exercício'
              }
            })
          )
        return exercises
      })()
    })
  ]

  static getCategories() {
    return ExerciseRepo.exercises
  }

  static getExercisesByCategoryId(id: string) {
    return ExerciseRepo.exercises.find((item) => item.id == id)?.exercises ?? []
  }

  static getExerciseByCategoryIdAndExerciseId(
    categoryId: string,
    exerciseId: string
  ) {
    const exercises =
      ExerciseRepo.exercises.find((item) => item.id == categoryId)?.exercises ??
      []
    return exercises.find((item) => item.id === exerciseId)
  }

  static getCategoryNameById(id: string) {
    return ExerciseRepo.exercises.find((item) => item.id == id)?.name
  }
}
