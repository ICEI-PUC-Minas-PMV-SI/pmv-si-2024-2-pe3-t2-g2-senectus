import { ExerciseEntity, ExerciseState } from '@core/models/ExerciseEntity'
import { ExercisePlayerStyle } from './ExercisePlayerStyle'
import { format } from 'date-fns'
import { FaClock, FaDumbbell } from 'react-icons/fa6'
import { v4 as uuid } from 'uuid'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { LoginContext } from '@context/LoginProvider'
import { useContext } from 'react'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { GetTrainingPlanAsClientService } from '@core/services/plan/crud/GetTrainingPlanAsClientService'
import { useRouter } from 'next/navigation'
import { UpdateTrainingPlanService } from '@core/services/plan/crud/UpdateTrainingPlanService'
import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'

interface AppExercisePlayerProps {
  exercise: ExerciseEntity
}

export function AppExercisePlayer({ exercise }: AppExercisePlayerProps) {
  const router = useRouter()
  const { auth } = useContext(LoginContext)

  const onFinish = () => {
    const plan = GetTrainingPlanAsClientService.exec()
    if (!plan) {
      router.push('/exercises')
      return
    }

    for (let i = 0; i < plan.exerciseList.length; i++) {
      const item = plan.exerciseList[i].content
      if (item.id === exercise.id) {
        item.state = ExerciseState.DONE
        UpdateTrainingPlanService.exec({ trainingPlan: plan })
      }
    }

    router.push('/exercises')
  }

  return (
    <ExercisePlayerStyle>
      <div id="video">
        <iframe
          src={exercise.video.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          allowFullScreen
        ></iframe>

        <div id="video-footer">
          <div id="duration">
            <FaClock id="time-card-icon" />
            {format(exercise.durationInMilli, 'mm:ss')}
          </div>

          <div id="dificulty">
            <FaDumbbell id="time-card-icon" className={exercise.level} />
            {exercise.levelInPtBr}
          </div>
        </div>
      </div>

      <div id="instructions">
        <h2>Instruções</h2>
        <ul>
          {exercise.instructions.map((item) => (
            <li key={uuid()}>{item}</li>
          ))}
        </ul>

        {auth?.token?.type === UserEntityTypeEnum.CLIENT && (
          <div id="instructions-actions">
            <AppButtonActionRect
              id="finish"
              href="/exercises"
              text="Concluído"
              onClick={onFinish}
              style={{ width: '75vw', maxWidth: '7.44rem' }}
            />
            <span></span>
            <AppButtonLinkRectOutline
              id="cancel"
              href="/exercises"
              text="Desistir"
            />
          </div>
        )}
      </div>
    </ExercisePlayerStyle>
  )
}
