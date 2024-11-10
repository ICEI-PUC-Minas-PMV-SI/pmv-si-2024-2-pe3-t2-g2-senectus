import { ReactNode } from 'react'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'
import { ModalControllerProps } from '@components/common/Modals/AppModal'

interface AppConfirmPlanRemotionModalActionProps {
  id?: string
  className?: string
  children?: ReactNode
  onCancel: () => void
  onDelete: () => void
  controller?: ModalControllerProps
}

export function AppConfirmPlanRemotionModalAction(
  props: AppConfirmPlanRemotionModalActionProps
) {
  return (
    <AppModalWithOptions
      id={props.id}
      className={props.className}
      controller={props.controller}
      title="Remover plano de treino"
      text="Tem certeza de que deseja remover este plano de treino?"
      options={[
        { text: 'Sim', onClick: props.onDelete, isOutlinedButton: true },
        { text: 'Não', onClick: props.onCancel }
      ]}
    >
      {props.children}
    </AppModalWithOptions>
  )
}
