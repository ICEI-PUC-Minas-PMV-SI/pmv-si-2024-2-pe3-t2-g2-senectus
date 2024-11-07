import { ReactNode } from 'react'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'
import { ModalControllerProps } from '@components/common/Modals/AppModal'

interface AppPlanOptionsModalActionProps {
  id?: string
  className?: string
  children?: ReactNode
  controller?: ModalControllerProps
  onEdit: () => void
  onDelete: () => void
}

export function AppPlanOptionsModalAction(
  props: AppPlanOptionsModalActionProps
) {
  return (
    <AppModalWithOptions
      id={props.id}
      className={props.className}
      controller={props.controller}
      title="Selecionar ação"
      text="Selecione uma ação para realizar nesta lista de exercícios:"
      options={[
        { text: 'Editar plano', onClick: props.onEdit },
        {
          text: 'Remover plano',
          onClick: props.onDelete,
          isOutlinedButton: true
        }
      ]}
    >
      {props.children}
    </AppModalWithOptions>
  )
}
