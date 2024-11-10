import { ZodError } from 'zod'
import { ReplaceAll } from '../../types/ReplaceAll'

export function formatZodError<T extends object>(
  expectedObject: T,
  error: ZodError
): ReplaceAll<T, string> {
  const formattedError = {} as ReplaceAll<T, string>
  error.issues.forEach((err) => {
    const key = err.path[0] as keyof T
    if (Object.prototype.hasOwnProperty.call(expectedObject, key))
      formattedError[key] = err.message
  })

  return formattedError
}
