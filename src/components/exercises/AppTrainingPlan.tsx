import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { TrainingPlanStyle } from './TrainingPlanStyle'
import { AppTrainingMenuPlan } from './AppTrainingMenuPlan'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { CollectionEventsOnDay } from '@core/models/CollectionEventsOnDay'

interface AppTrainingPlanProps {
  exercises: CollectionEventsOnDay<ExerciseEntity>[]
}

export function AppTrainingPlan({ exercises }: AppTrainingPlanProps) {
  return (
    <TrainingPlanStyle>
      <h2>Plano de treino</h2>
      <p>
        Consulte o seu plano de treino criado pelo seu profissional favorito!
      </p>
      <AppResponsiveCalendar
        list={exercises}
        onOpenMenu={(exercises) => (
          <AppTrainingMenuPlan exercises={exercises} />
        )}
      />
    </TrainingPlanStyle>
  )
}
