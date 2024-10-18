import {
  FaCalendarDays,
  FaClock,
  FaPersonRunning,
  FaTriangleExclamation
} from 'react-icons/fa6'
import { ProgressExercisesStyle } from './ProgressExercisesStyle'
import { AppCircularProgress } from '@components/common/Progress/AppCircularProgress'

export function AppProgressExercises() {
  return (
    <ProgressExercisesStyle>
      <h2>Progresso</h2>
      <p>Confira o seu progresso do plano de treino:</p>

      <div className="list-infos">
        <ul id="primary-exercise-infos">
          <li id="progress-card" className="medium-card">
            <div className="card-text">
              <h3>Taxa de conclusão</h3>
              <small>Você está indo muito bem!</small>
            </div>

            <div id="exercise-progress">
              <AppCircularProgress value={65} showValueLabel size="lg" />
            </div>
          </li>
          <li id="next-exercise" className="medium-card">
            <h3>Próximo</h3>
            <small>Fácil</small>
          </li>
        </ul>

        <ul id="secondary-exercise-infos">
          <li className="small-card">
            <div className="header">
              <h3>Exercícios</h3>
              <FaPersonRunning id="exercise-card-icon" />
            </div>

            <div className="infos">
              <p>17</p>
              <small>Concluídos</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Faltas</h3>
              <FaTriangleExclamation id="warn-card-icon" />
            </div>

            <div className="infos">
              <p>2</p>
              <small>Exercícios</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Tempo</h3>
              <FaClock id="time-card-icon" />
            </div>

            <div className="infos">
              <p>47</p>
              <small>Horas gastas</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Total</h3>
              <FaCalendarDays id="calendar-card-icon" />
            </div>

            <div className="infos">
              <p>47</p>
              <small>Exercícios</small>
            </div>
          </li>
        </ul>
      </div>
    </ProgressExercisesStyle>
  )
}
