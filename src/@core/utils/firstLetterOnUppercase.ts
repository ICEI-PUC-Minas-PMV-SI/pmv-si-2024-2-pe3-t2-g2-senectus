export function firstLetterOnUpperCase(value: string) {
  return `${value[0].toUpperCase()}${value.substring(1, value.length)}`
}
