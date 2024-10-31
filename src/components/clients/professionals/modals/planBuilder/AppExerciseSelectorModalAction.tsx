import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { AppModal } from '@components/common/Modals/AppModal'
import { ReactNode } from 'react'
import { ExerciseSelectorModalStyle } from './ExerciseSelectorModalStyle'

interface AppExerciseSelectorModalActionProps {
  id?: string
  className?: string
  children: ReactNode
  onEdit: () => void
  onView: () => void
  onDelete: () => void
}

function AppSelectorModal(props: AppExerciseSelectorModalActionProps) {
  return (
    <ExerciseSelectorModalStyle>
      <p>Selecione uma ação para realizar nesta pilha de exercícios:</p>
      <div className="options">
        <AppButtonActionRect
          className="common-btn"
          text="Editar pilha"
          onClick={props.onEdit}
          fullWidth
        />
        <AppButtonActionRect
          className="common-btn"
          text="Visualizar exercícios"
          onClick={props.onView}
          fullWidth
        />
        <AppButtonActionRectOutline
          className="outline-btn"
          text="Remover pilha"
          onClick={props.onDelete}
          fullWidth
        />
      </div>
    </ExerciseSelectorModalStyle>
  )
}

export function AppExerciseSelectorModalAction(
  props: AppExerciseSelectorModalActionProps
) {
  return (
    <AppModal
      title="Selecionar ação"
      id={props.id ?? ''}
      className={props.className ?? ''}
      modalBody={<AppSelectorModal {...props} />}
    >
      {props.children}
    </AppModal>
  )
}
