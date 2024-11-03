interface Props {
    id: string,
    role: string
    name: string
    email: string
    phone: string
    city: string
}
export default class ProfessionalEntity {
  private readonly props: Props

  constructor(props: Props) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get role() {
    return this.props.role
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get phone() {
    return this.props.phone
  }

  get city() {
    return this.props.city
  }
}