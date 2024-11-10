import { ReactNode } from 'react'
import { AppModalWithOptions } from '@components/common/Modals/AppModalWithOptions'

interface AppExerciseSelectorModalActionProps {
  id?: string
  className?: string
  children: ReactNode
  onEdit: () => void
  onView: () => void
  onDelete: () => void
}

export function AppExerciseSelectorModalAction(
  props: AppExerciseSelectorModalActionProps
) {
  return (
    <AppModalWithOptions
      id={props.id}
      className={props.className}
      title="Selecionar ação"
      text="Selecione uma ação para realizar nesta lista de exercícios:"
      options={[
        { text: 'Editar lista', onClick: props.onEdit },
        { text: 'Visualizar exercícios', onClick: props.onView },
        {
          text: 'Remover lista',
          onClick: props.onDelete,
          isOutlinedButton: true
        }
      ]}
    >
      {props.children}
    </AppModalWithOptions>
  )
}
