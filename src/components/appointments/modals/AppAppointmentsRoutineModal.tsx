import { ModalControllerProps } from '@components/common/Modals/AppModal'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'
import { ReactNode } from 'react'

interface AppAppointmentsRoutineModalProps {
  id?: string
  className?: string
  controller: ModalControllerProps
  children: ReactNode
  onCancel: () => void
  onDelete: () => void
}

export function AppAppointmentsRoutineModal(
  props: AppAppointmentsRoutineModalProps
) {
  return (
    <AppModalWithOptions
      id={props.id ?? ''}
      className={props.className ?? ''}
      title="Cancelar consulta"
      text="Você tem certeza de que deseja cancelar esta consulta?"
      controller={props.controller}
      options={[
        {
          text: 'Não',
          onClick: () => {
            props.controller.onClose()
            props.onCancel()
          }
        },
        {
          text: 'Sim',
          isOutlinedButton: true,
          onClick: () => {
            props.controller.onClose()
            props.onDelete()
          }
        }
      ]}
    >
      {props.children}
    </AppModalWithOptions>
  )
}
