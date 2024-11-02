import { AppointmentsEntity } from '@core/models/AppointmentsEntity'

interface AppointmentsCollection {
  appointments: string[]
}

export class AppointmentsRepo {
  private static appointmentCollectionId = 'appointments'
  static set(appointment: AppointmentsEntity) {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) {
      const collection: AppointmentsCollection = {
        appointments: [appointment.serialize()]
      }
      return localStorage.setItem(appointment.id, JSON.stringify(collection))
    }

    const searchedAppointmentIndex = appointments.findIndex(
      (item) => item.id === appointment.id
    )
    if (searchedAppointmentIndex >= 0)
      appointments[searchedAppointmentIndex] = appointment
    else appointments.push(appointment)

    const serializedAppointments = appointments.map((item) => item.serialize())
    const collection: AppointmentsCollection = {
      appointments: serializedAppointments
    }
    localStorage.setItem(
      AppointmentsRepo.appointmentCollectionId,
      JSON.stringify(collection)
    )
  }

  static deleteById(id: string) {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return

    const searchedAppointmentIndex = appointments.findIndex(
      (item) => item.id === id
    )
    if (!searchedAppointmentIndex) return

    appointments.splice(searchedAppointmentIndex, 1)

    const serializedAppointments = appointments.map((item) => item.serialize())
    const collection: AppointmentsCollection = {
      appointments: serializedAppointments
    }
    localStorage.setItem(
      AppointmentsRepo.appointmentCollectionId,
      JSON.stringify(collection)
    )
  }

  static findById(id: string): AppointmentsEntity | undefined {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return

    const searchedAppointment = appointments.find((item) => item.id === id)
    return searchedAppointment ?? undefined
  }

  static findByProfessionalIdAndClientIdAndDateInMilli(
    professionalId: string,
    clientId: string,
    dateInMilli: number
  ): AppointmentsEntity | undefined {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return

    const searchedAppointment = appointments.find(
      (item) =>
        item.host === professionalId &&
        item.client === clientId &&
        item.dateInMilli === dateInMilli
    )
    return searchedAppointment ?? undefined
  }

  static findByProfessionalId(id: string): AppointmentsEntity | undefined {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return

    const searchedAppointment = appointments.find((item) => item.host === id)
    return searchedAppointment ?? undefined
  }

  static findByClientId(id: string): AppointmentsEntity | undefined {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return

    const searchedAppointment = appointments.find((item) => item.client === id)
    return searchedAppointment ?? undefined
  }

  static findAllByClientIdOrProfessionalId(
    clientId: string,
    professionalId: string
  ): AppointmentsEntity[] {
    const appointments = AppointmentsRepo.getSource()
    if (!appointments) return []

    const matches: AppointmentsEntity[] = []
    for (let i = 0; i < appointments.length; i++) {
      const item = appointments[i]
      if (item.client === clientId || item.host === professionalId)
        appointments.push(item)
    }

    return matches
  }

  private static getSource(): AppointmentsEntity[] | undefined {
    const appointmentsSerializedCollection = localStorage.getItem(
      AppointmentsRepo.appointmentCollectionId
    )
    if (!appointmentsSerializedCollection) return

    const appointmentsJsonCol: AppointmentsCollection = JSON.parse(
      appointmentsSerializedCollection
    )
    const appointments: AppointmentsEntity[] =
      appointmentsJsonCol.appointments.map((item) =>
        AppointmentsEntity.deserialize(item)
      )
    return appointments
  }
}
