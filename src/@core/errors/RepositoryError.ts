export class RepositoryError extends Error {
  readonly redirect?: string
  constructor(props: string) {
    super(props)
    return
  }
}
