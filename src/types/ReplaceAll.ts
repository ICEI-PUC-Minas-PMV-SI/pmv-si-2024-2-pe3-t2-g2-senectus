export type ReplaceAll<T extends object, R> = {
  [Key in keyof T]: R
}
