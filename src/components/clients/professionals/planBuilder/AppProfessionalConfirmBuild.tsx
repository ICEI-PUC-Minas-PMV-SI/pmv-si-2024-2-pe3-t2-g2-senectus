import {
  AppResponsiveCalendar,
  CalendarContextProps
} from '@components/common/Calendar/AppResponsiveCalendar'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { AppProfessionalConfirmBuildMenu } from './AppProfessionalConfirmBuildMenu'
import { AppTrainingMenuPlan } from '@components/exercises/AppTrainingMenuPlan'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { FaAngleLeft } from 'react-icons/fa6'
import { ProfessionalConfirmBuilderStyle } from './ProfessionalConfirmBuilderStyle'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import { CreateCalendarCollectionByPlanService } from '@core/services/appointments/professional/CreateCalendarCollectionByPlanService'
import { PlanBuildStageContextProps } from '../sharedProps/PlanBuilderStage'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { useRouter } from 'next/navigation'
import { PlanBuilderSubmitService } from '@core/services/appointments/professional/PlanBuilderSubmitService'

interface AppProfessionalConfirmBuildProps {
  planContext: PlanBuildStageContextProps
  setPlanContext: Dispatch<SetStateAction<PlanBuildStageContextProps>>
  onMoreExercises: () => void
  onSubmit: (plan: TrainingPlanEntity) => void
}

interface MenuTypeProps {
  type: 'main' | 'exercise'
  context?: ExerciseEntity[]
}

export function AppProfessionalConfirmBuild({
  planContext,
  setPlanContext,
  onMoreExercises
}: AppProfessionalConfirmBuildProps) {
  const router = useRouter()
  const [menuType, setMenuType] = useState<MenuTypeProps>({ type: 'main' })
  const [desktopMenuContext, setDesktopMenuContext] = useState<
    CalendarContextProps<ExerciseEntity>
  >({})

  const exercises = useMemo(
    () => CreateCalendarCollectionByPlanService.exec(planContext.payload),
    [planContext]
  )

  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [menuType])

  const openExerciseMenu = (exercises: ExerciseEntity[]) => {
    setMenuType({ type: 'exercise', context: exercises })
  }

  const closeExerciseMenu = () => {
    setMenuType({ type: 'main' })
  }

  const onSubmit = () => {
    PlanBuilderSubmitService.exec(router, planContext.payload)
  }

  useEffect(() => {
    addEventListener('resize', () => {
      if (window.innerHeight < 1000) setMenuType({ type: 'main' })
    })
  }, [])

  return (
    <ProfessionalConfirmBuilderStyle>
      <AppResponsiveCalendar
        list={exercises}
        sideMenuContext={desktopMenuContext}
        setSideMenuContext={setDesktopMenuContext}
        onOpenMenu={(exercise) => (
          <div id="calendar-menu">
            {menuType.type === 'main' && (
              <div ref={menuRef}>
                <AppProfessionalConfirmBuildMenu
                  exercises={exercise}
                  setPlanContext={setPlanContext}
                  openExerciseMenu={openExerciseMenu}
                  closeDesktopMenu={() => {
                    setDesktopMenuContext({ isOpen: false })
                  }}
                />
              </div>
            )}
            {menuType.type === 'exercise' && menuType.context && (
              <div id="exercise-menu" ref={menuRef}>
                <AppButtonActionRectOutline
                  className="back-btn"
                  onClick={closeExerciseMenu}
                  text="Voltar"
                  icon={<FaAngleLeft />}
                />
                <AppTrainingMenuPlan
                  exercises={
                    new CollectionEventsOnDay({
                      monthDay: exercise.monthDay,
                      events: menuType.context
                    })
                  }
                />
              </div>
            )}
          </div>
        )}
        mobileEmptyListMessage="Sem tarefas neste dia."
        messageBuilder={(eventsLength) => {
          if (eventsLength <= 0) return ''
          if (eventsLength === 1) return '1 exercício disponível'
          if (eventsLength > 1 && eventsLength <= 10)
            return `${eventsLength} exercícios disponíveis`
          return '+10 exercícios disponível'
        }}
      />

      <div id="submit-actions">
        <AppButtonActionRectOutline
          text="Mais exercícios"
          onClick={onMoreExercises}
          fullWidth
        />
        <AppButtonActionRect
          id="finish-creation"
          text="Finalizar"
          onClick={onSubmit}
          fullWidth
        />
      </div>
    </ProfessionalConfirmBuilderStyle>
  )
}
