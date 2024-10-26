import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { PlanBuildPayloadProps } from '@screens/clients/plan/new/page'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AppProfessionalConfirmBuildMenu } from './AppProfessionalConfirmBuildMenu'
import { AppTrainingMenuPlan } from '@components/exercises/AppTrainingMenuPlan'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { FaAngleLeft } from 'react-icons/fa6'
import { ProfessionalConfirmBuilderStyle } from './ProfessionalConfirmBuilderStyle'
import { AppInternalLink } from '@components/common/InternalLink/AppInternalLink'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'

interface AppProfessionalConfirmBuildProps {
  payload: PlanBuildPayloadProps
  onMoreExercises: () => void
}

interface MenuTypeProps {
  type: 'main' | 'exercise'
  context?: ExerciseEntity[]
}

export function AppProfessionalConfirmBuild({
  payload,
  onMoreExercises
}: AppProfessionalConfirmBuildProps) {
  const [menuType, setMenuType] = useState<MenuTypeProps>({ type: 'main' })
  const exercises = useMemo(() => {
    const collections: CollectionEventsOnDay<ExerciseEntity>[] = []
    for (let day = 0; day < 31; day++) {
      collections.push(
        new CollectionEventsOnDay<ExerciseEntity>({
          monthDay: day + 1,
          events: []
        })
      )
    }

    payload.dates.forEach((date) => {
      const exercises = payload.exercises.map((exercise) => {
        const clone = exercise.clone()
        clone.dateInMilli = date.getTime()
        return clone
      })
      const monthDay = date.getDate()
      if (!collections[monthDay - 1].events)
        collections[monthDay - 1].events = exercises
      else collections[monthDay - 1].events.push(...exercises)
    })

    return collections
  }, [payload])

  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [menuType])

  const openExerciseMenu = (exercises: ExerciseEntity[]) => {
    setMenuType({
      type: 'exercise',
      context: exercises
    })
  }

  const closeExerciseMenu = () => {
    setMenuType({ type: 'main' })
  }

  useEffect(() => {
    addEventListener('resize', () => {
      if (window.innerHeight < 1000) {
        setMenuType({ type: 'main' })
      }
    })
  }, [])

  return (
    <ProfessionalConfirmBuilderStyle>
      <AppResponsiveCalendar
        list={exercises}
        onOpenMenu={(exercise) => (
          <div id="calendar-menu">
            {menuType.type === 'main' && (
              <div ref={menuRef}>
                <AppProfessionalConfirmBuildMenu
                  exercises={exercise}
                  openExerciseMenu={openExerciseMenu}
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
        mobileEmptyListMessage="Sem tarefas neste dia"
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
        <AppInternalLink href="/clients" id="finish-creation">
          <AppButtonActionRect fullWidth text="Finalizar" />
        </AppInternalLink>
      </div>
    </ProfessionalConfirmBuilderStyle>
  )
}
