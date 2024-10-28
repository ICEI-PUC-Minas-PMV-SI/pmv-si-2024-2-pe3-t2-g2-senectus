import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { v4 as uuid } from 'uuid'
import {
  useMemo,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction
} from 'react'
import { format } from 'date-fns'
import { ptBR as locale } from 'date-fns/locale'
import { ProfessionalConfirmBuildMenuStyle } from './ProfessionalConfirmBuildMenuStyle'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import { AppExerciseSelectorModalAction } from '../modals/planBuilder/AppExerciseSelectorModalAction'
import { SortExercisesByDateKeyService } from '@core/services/appointments/professional/SortExercisesByDateKeyService'
import { FormatExercisesToShowOnPlanBuildService } from '@core/services/appointments/professional/FormatExercisesToShowOnPlanBuildService'
import { EditPlanBuilderService } from '@core/services/appointments/professional/EditPlanBuilderService'
import { PlanBuildStageContextProps } from '../sharedProps/PlanBuilderStage'
import { DeleteExercisePlanBuilderService } from '@core/services/appointments/professional/DeleteExercisePlanBuilderService'

interface FormattedExercise {
  exercises: ExerciseEntity[]
  sortedExerciseName: string
  date: Date
}

interface AppProfessionalConfirmBuildMenuProps {
  exercises: CollectionEventsOnDay<ExerciseEntity>
  setPlanContext: Dispatch<SetStateAction<PlanBuildStageContextProps>>
  openExerciseMenu: (exercises: ExerciseEntity[]) => void
  closeDesktopMenu: () => void
}

export function AppProfessionalConfirmBuildMenu({
  exercises,
  setPlanContext,
  openExerciseMenu,
  closeDesktopMenu
}: AppProfessionalConfirmBuildMenuProps) {
  const sortedDateKeys = useMemo(
    () => SortExercisesByDateKeyService.exec(exercises),
    [exercises]
  )
  const parsedExercises = useMemo(
    () => FormatExercisesToShowOnPlanBuildService.exec(sortedDateKeys),
    [exercises, sortedDateKeys]
  )

  const onReeditCall = (exercise: FormattedExercise) => {
    setPlanContext((prev) => EditPlanBuilderService.exec(prev, exercise))
  }

  const onDeleteExerciseStack = (exercise: FormattedExercise) => {
    setPlanContext((prev) =>
      DeleteExercisePlanBuilderService.exec(prev, exercise)
    )
    closeDesktopMenu()
  }

  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(parsedExercises.length / 5))
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(parsedExercises.length / 5))
  }, [parsedExercises])

  return (
    <ProfessionalConfirmBuildMenuStyle ref={listRef}>
      <h2>Horários</h2>
      <div className="list-container">
        <ul id="exercise-list">
          {parsedExercises.slice(page * 5, (page + 1) * 5).map((container) => {
            return (
              <li key={uuid()}>
                <AppExerciseSelectorModalAction
                  className="li-item"
                  onView={() => openExerciseMenu(container.exercises)}
                  onEdit={() => onReeditCall(container)}
                  onDelete={() => onDeleteExerciseStack(container)}
                >
                  <p>
                    <b>Tipos</b>: {container.sortedExerciseName}
                  </p>
                  <p>
                    <b>Horário</b>: {format(container.date, 'dd')} de{' '}
                    {format(container.date, 'MMMM', { locale })} de{' '}
                    {format(container.date, 'yyyy')} às{' '}
                    {format(container.date, 'HH:mm')}
                  </p>
                </AppExerciseSelectorModalAction>
              </li>
            )
          })}
        </ul>

        {total > 1 && parsedExercises.length > 5 && (
          <AppPagination
            className="pagination"
            total={total}
            page={page + 1}
            onChange={(page) => {
              setPage(page - 1)
              listRef?.current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          />
        )}
      </div>
    </ProfessionalConfirmBuildMenuStyle>
  )
}
