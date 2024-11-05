import { ModalControllerProps } from '@components/common/Modals/AppModal'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'
import { ReactNode } from 'react'

interface AppDeleteAccountModalProps {
  id?: string
  className?: string
  controller: ModalControllerProps
  children?: ReactNode
  onCancel: () => void
  onDelete: () => void
}

export function AppDeleteAccountModal(props: AppDeleteAccountModalProps) {
  return (
    <AppModalWithOptions
      id={props.id ?? ''}
      className={props.className ?? ''}
      title="Remover conta"
      text="Está ação é irreversível. Você tem certeza de que deseja deletar a sua conta?"
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
