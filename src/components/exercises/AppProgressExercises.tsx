import {
  FaCalendarDays,
  FaClock,
  FaPersonRunning,
  FaTriangleExclamation
} from 'react-icons/fa6'
import { ProgressExercisesStyle } from './ProgressExercisesStyle'
import { AppCircularProgress } from '@components/common/Progress/AppCircularProgress'
import Image from 'next/image'
import Link from 'next/link'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'
import { useMemo } from 'react'
import { GetPlanProgressService } from '@core/services/plan/crud/GetPlanProgressService'
import { GetNextExerciseService } from '@core/services/plan/crud/GetNextExerciseService'

interface AppProgressExercisesProps {
  plan: TrainingPlanEntity
}

export function AppProgressExercises(props: AppProgressExercisesProps) {
  const exerciseStatus = useMemo(() => {
    return GetPlanProgressService.exec(props.plan)
  }, [props.plan])
  const nextExercise = useMemo(() => {
    return GetNextExerciseService.exec(props.plan)
  }, [props.plan])

  return (
    <ProgressExercisesStyle>
      <h2>Progresso</h2>
      <p>Confira o quanto você progrediu em seu plano de treino:</p>

      <div className="list-infos">
        <ul id="primary-exercise-infos">
          <li id="progress-card" className="medium-card">
            <div className="card-text">
              <h3>Taxa de conclusão</h3>
              {exerciseStatus.progress >= 60 && (
                <small>Você está indo muito bem!</small>
              )}
              {exerciseStatus.progress < 60 && <small>Não se desanime!</small>}
            </div>

            <div id="exercise-progress">
              <AppCircularProgress
                aria-label="progresso"
                value={Number(exerciseStatus.progress.toFixed(2))}
                showValueLabel
                size="lg"
              />
            </div>
          </li>
          <li id="next-exercise" className="medium-card">
            {!nextExercise && (
              <div id="next-exercise-btn">
                <h3>Próximo</h3>
                <small>Nenhum</small>
              </div>
            )}
            {nextExercise && (
              <>
                <Image
                  src={
                    nextExercise?.image?.src ??
                    '/img/exercises/stretching-exercise.png'
                  }
                  alt={nextExercise?.image?.alt ?? 'Pessoa fazendo exercício'}
                  width={100}
                  height={100}
                />
                <Link href={nextExercise.href!} id="next-exercise-btn">
                  <h3>Próximo</h3>
                  <small>{nextExercise.levelInPtBr}</small>
                </Link>
              </>
            )}
          </li>
        </ul>

        <ul id="secondary-exercise-infos">
          <li className="small-card">
            <div className="header">
              <h3>Exercícios</h3>
              <FaPersonRunning id="exercise-card-icon" />
            </div>

            <div className="infos">
              <p>{exerciseStatus.finished}</p>
              <small>Concluídos</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Faltas</h3>
              <FaTriangleExclamation id="warn-card-icon" />
            </div>

            <div className="infos">
              <p>{exerciseStatus.skipped}</p>
              <small>Exercícios</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Tempo</h3>
              <FaClock id="time-card-icon" />
            </div>

            <div className="infos">
              <p>
                {Math.floor(
                  exerciseStatus.spentHoursInMilli / (1000 * 60 * 60)
                )}
              </p>
              <small>Horas gastas</small>
            </div>
          </li>

          <li className="small-card">
            <div className="header">
              <h3>Total</h3>
              <FaCalendarDays id="calendar-card-icon" />
            </div>

            <div className="infos">
              <p>{exerciseStatus.totalExercises}</p>
              <small>Exercícios</small>
            </div>
          </li>
        </ul>
      </div>
    </ProgressExercisesStyle>
  )
}
