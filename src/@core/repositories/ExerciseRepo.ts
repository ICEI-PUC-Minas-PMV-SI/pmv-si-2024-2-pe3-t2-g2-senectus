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
        src: '/img/exercises/stretching-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              id: 'exercicio-da-cadeira',
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              href: '/exercises/exercicio-da-cadeira',
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
    },
    {
      id: 'equilibrio',
      name: 'Equilíbrio',
      href: 'exercises/equilibrio',
      image: {
        src: '/img/exercises/balance-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              id: 'exercicio-da-cadeira',
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              href: '/exercises/exercicio-da-cadeira',
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
    },
    {
      id: 'fortalecimento',
      name: 'Fortalecimento',
      href: 'exercises/fortalecimento',
      image: {
        src: '/img/exercises/strengthening-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              id: 'exercicio-da-cadeira',
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              href: '/exercises/exercicio-da-cadeira',
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
    },
    {
      id: 'mobilidade',
      name: 'Mobilidade',
      href: 'exercises/mobilidade',
      image: {
        src: '/img/exercises/walking-exercise.png',
        alt: 'Imagem de uma pessoa caminhando'
      },
      exercises: (() => {
        const exercises: ExerciseEntity[] = []
        for (let i = 0; i < 20; i++)
          exercises.push(
            new ExerciseEntity({
              id: 'exercicio-da-cadeira',
              durationInMilli: 1000 * 60 * 3,
              name: 'Exercício da cadeira',
              href: '/exercises/exercicio-da-cadeira',
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
    }
  ]

  static getCategories(): ExerciseCategoryProps[] {
    return ExerciseRepo.exercises
  }

  static getExerciseByCategoryId(id: string) {
    return ExerciseRepo.exercises.find((item) => item.id == id)?.exercises ?? []
  }

  static getCategoryNameById(id: string) {
    return ExerciseRepo.exercises.find((item) => item.id == id)?.name
  }
}
