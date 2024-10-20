import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { ExercisePlayerStyle } from './ExercisePlayerStyle'
import { format } from 'date-fns'
import { FaClock, FaDumbbell } from 'react-icons/fa6'
import { v4 as uuid } from 'uuid'
import { AppButtonLinkRect } from '@components/common/Buttons/AppButtonLinkRect'

interface AppExercisePlayerProps {
  exercise: ExerciseEntity
}

export function AppExercisePlayer({ exercise }: AppExercisePlayerProps) {
  return (
    <ExercisePlayerStyle>
      <div id="video">
        <iframe
          src="https://www.youtube.com/embed/28kE5vLW4vM"
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

        <div id="instructions-actions">
          <AppButtonLinkRect id="finish" href="/exercises" text="Concluído" />
          <span></span>
          <AppButtonLinkRect id="cancel" href="/exercises" text="Desistir" />
        </div>
      </div>
    </ExercisePlayerStyle>
  )
}
