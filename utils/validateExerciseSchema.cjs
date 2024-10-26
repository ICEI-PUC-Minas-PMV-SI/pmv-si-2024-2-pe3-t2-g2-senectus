const { z } = require("zod")
const exercises = require('../public/inMemoryDb/exercises.json')
const fs = require("fs")
const path = require("path")

class Validator {
  static warns = []
  static errors = []

  static exerciseValidators = [
    (exercise, category) => {
      if(exercise.name.length > 23)
        Validator.warns.push(`"${exercise.name}" em "${category.name}" possui mais de 23 caracteres e isso pode deteriorar a responsividade do sistema.`)
    },
    (exercise, category) => {
      if(exercise.repeat)
        Validator.warns.push(`"${exercise.name}" em "${category.name}" contém a propriedade "repeat" que é exclusivamente dedicada para ambientes de desenvolvimento, remova assim que possível.`)
    },
    (exercise) => Validator.validateFile(exercise.image.src)
  ]

  static validateFile(filePath) {
    const file = path.resolve(__dirname, "..", "public", filePath.replace("/", ""))
    const descriptor = fs.openSync(file, "r")
    try {
      const stat = fs.fstatSync(descriptor, "r")
      if(stat == "ENOENT") return Validator.errors.push(`${filePath} não foi encontrado`)
    } catch(err) {
      return Validator.errors.push(err)
    } finally {
      fs.closeSync(descriptor)
    }
  } 

  static main() {
    console.info("[INFO] Analisando schema da base de dados em memória dos exercícios...")
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

    try {
      const result = schema.parse(exercises)
      result.categories.forEach(category => {
        Validator.validateFile(category.image.src)
        category.exercises.forEach((exercise) => {
          Validator.exerciseValidators.forEach((validator) => validator(exercise, category))
        })
      })
    } catch(e) {
      Validator.errors.push(e)
    } finally {
      Validator.warns.forEach(warn => console.warn(`[WARN] ${warn}`))
      Validator.errors.forEach(err => console.error(`[ERROR] ${err}, stack: ${err.stack}`))
      console.info(`[INFO] Análise finalizada. Avisos(${Validator.warns.length}), Erros(${Validator.errors.length})`)
    }
  }
}

Validator.main()
