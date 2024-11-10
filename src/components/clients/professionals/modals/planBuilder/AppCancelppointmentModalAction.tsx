import { ReactNode } from 'react'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'
import { ModalControllerProps } from '@components/common/Modals/AppModal'

interface AppCancelAppointmentModalActionProps {
  id?: string
  className?: string
  children?: ReactNode
  title: string
  onConfirmAction: () => void
  onCancelAction: () => void
  controller?: ModalControllerProps
}

export function AppCancelAppointmentModalAction(
  props: AppCancelAppointmentModalActionProps
) {
  return (
    <AppModalWithOptions
      id={props.id}
      className={props.className}
      controller={props.controller}
      title={props.title}
      text="Tem certeza de que deseja realizar esta ação?"
      options={[
        { text: 'Sim', onClick: props.onConfirmAction, isOutlinedButton: true },
        { text: 'Não', onClick: props.onCancelAction }
      ]}
    >
      {props.children}
    </AppModalWithOptions>
  )
}
