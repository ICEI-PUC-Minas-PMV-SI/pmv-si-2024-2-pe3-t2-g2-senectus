interface ServiceErrorProps {
  msg: string
  redirect?: string
}

export class ServiceError extends Error {
  readonly redirect?: string
  constructor(props: ServiceErrorProps | string) {
    if (typeof props === 'string') {
      super(props)
      return
    }

    super(props.msg)
    this.redirect = props.redirect
  }
}
