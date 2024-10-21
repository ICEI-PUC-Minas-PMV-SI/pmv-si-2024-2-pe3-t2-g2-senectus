import { ExerciseCategoryEntity } from '@core/models/ExerciseCategoryEntity'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import z from 'zod'
import exercises from '@public/in-memory-db/exercises.json'

export class ExerciseRepo {
  private static exercises: ExerciseCategoryEntity[] = []

  static generateDatabase() {
    const schema = z.object({
      categories: z.array(
        z.object({
          name: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string()
          }),
          exercises: z.array(
            z.object({
              repeat: z.optional(z.number()),
              durationInMilli: z.number(),
              name: z.string(),
              level: z.union([
                z.literal('hard'),
                z.literal('medium'),
                z.literal('easy')
              ]),
              image: z.object({
                src: z.string(),
                alt: z.string()
              }),
              instructions: z.array(z.string()),
              video: z.object({
                src: z.string()
              })
            })
          )
        })
      )
    })

    const result = schema.parse(exercises)
    ExerciseRepo.exercises = result.categories.map(
      (item) =>
        new ExerciseCategoryEntity({
          name: item.name,
          image: item.image,
          exercises: item.exercises.flatMap((exercise) => {
            const parsedExercise = new ExerciseEntity({
              name: exercise.name,
              durationInMilli: exercise.durationInMilli,
              level: exercise.level,
              instructions: exercise.instructions,
              video: exercise.video,
              image: exercise.image
            })

            const parsedExerciseList: ExerciseEntity[] = [parsedExercise]
            if (exercise.repeat)
              for (let i = 0; i < exercise.repeat; i++)
                parsedExerciseList.push(parsedExercise)

            return parsedExerciseList
          })
        })
    )
  }

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

  static findExercisesByMatches(categoryId: string, key: string) {
    const matches: ExerciseEntity[] = []
    const list = ExerciseRepo.getExercisesByCategoryId(categoryId)
    const regex = new RegExp(key, 'gmi')
    for (let i = 0; i < list.length; i++)
      if (regex.test(list[i].name) || regex.test(list[i].level))
        matches.push(list[i])

    return matches
  }
}

ExerciseRepo.generateDatabase()
