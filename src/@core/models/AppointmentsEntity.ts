import { CalendarEventEntity } from './CalendarEventEntity'

export enum AppointmentStateEnum {
  ACCEPTED = 'Aceito',
  PENDENT = 'Pendente'
}

interface AppointmentEntityProps {
  host: string
  client: string
  dateInMilli: number
  description: string
  serviceType: string
  state: AppointmentStateEnum
}

export class AppointmentsEntity extends CalendarEventEntity {
  private props: AppointmentEntityProps

  constructor(props: AppointmentEntityProps) {
    super({ dateInMilli: props.dateInMilli })
    this.props = props
  }

  get host() {
    return this.props.host
  }
  get client() {
    return this.props.client
  }
  get dateInMilli() {
    return this.props.dateInMilli
  }
  get description() {
    return this.props.description
  }
  get serviceType() {
    return this.props.serviceType
  }
  get state() {
    return this.props.state
  }
}
