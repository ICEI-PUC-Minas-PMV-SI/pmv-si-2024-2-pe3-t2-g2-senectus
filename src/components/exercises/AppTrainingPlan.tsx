import { AppResponsiveCalendar } from '@components/common/Calendar/AppResponsiveCalendar'
import { TrainingPlanStyle } from './TrainingPlanStyle'
import { RandomExercisesSeedService } from '@core/services/seed/exercises/RandomExercisesSeedService'
import { useEffect } from 'react'
import { useCalendar } from '../../hooks/useCalendar'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { AppTrainingMenuPlan } from './AppTrainingMenuPlan'

export function AppTrainingPlan() {
  const [day, setDays] = useCalendar<ExerciseEntity>()

  useEffect(() => {
    setDays(RandomExercisesSeedService.exec(100))
  }, [setDays])

  return (
    <TrainingPlanStyle>
      <h2>Plano de treino</h2>
      <p>
        Consulte o seu plano de treino criado pelo seu profissional favorito!
      </p>
      <AppResponsiveCalendar
        list={day}
        onOpenMenu={(item) => <AppTrainingMenuPlan exercises={item} />}
      />
    </TrainingPlanStyle>
  )
}
