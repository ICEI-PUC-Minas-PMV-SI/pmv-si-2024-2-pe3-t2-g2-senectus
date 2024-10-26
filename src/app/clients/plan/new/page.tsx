'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@themes/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AppHeader } from '@components/common/Header/AppHeader'
import { AppContainer } from '@components/common/Container/AppContainer'
import { AppInitialText } from '@components/common/Text/AppInitialText'
import { AppButtonLinkRectOutline } from '@components/common/Buttons/AppButtonLinkRectOutline'
import { AppButtonActionRectOutline } from '@components/common/Buttons/AppButtonActionRectOutline'
import { AppProfessionalClientsSearchList } from '@components/clients/professionals/clients/AppProfessionalClientsSearchList'
import { AppInternalContainer } from '@components/common/InternalContainer/AppInternalContainer'
import { FaAngleLeft } from 'react-icons/fa6'
import { ClientEntity } from '@core/models/ClientEntity'
import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { AppProfessionalExercisesSelector } from '@components/clients/professionals/planBuilder/AppProfessionalExercisesSelector'
import { AppProfessionalSetCalendarDays } from '@components/clients/professionals/planBuilder/AppProfessionalSetCalendarDays'
import { AppProfessionalConfirmBuild } from '@components/clients/professionals/planBuilder/AppProfessionalConfirmBuild'
import { NotificationContainer } from '@components/common/Notification/NotificationContainer'
import 'react-toastify/dist/ReactToastify.css'

enum StageEnum {
  SEARCH_CLIENT = 0,
  SELECT_EXERCISES = 1,
  SELECT_DATE = 2,
  CONFIRM = 3
}

export interface PlanBuildPayloadProps {
  client: ClientEntity
  exercises: ExerciseEntity[]
  dates: Date[]
}

export interface PlanBuildStageContextProps {
  stageId: StageEnum
  payload?: Partial<PlanBuildPayloadProps>
}

export default function PlanBuilderScreen() {
  const [stage, setStage] = useState<PlanBuildStageContextProps>({
    stageId: StageEnum.SEARCH_CLIENT
  })

  const onSelectedClient = (client: ClientEntity) => {
    setStage((prev) => ({
      stageId: StageEnum.SELECT_EXERCISES,
      payload: {
        ...prev.payload,
        client
      }
    }))
  }

  const onSelectedExercises = (exercises: ExerciseEntity[]) => {
    setStage((prev) => ({
      stageId: StageEnum.SELECT_DATE,
      payload: {
        ...prev?.payload,
        exercises
      }
    }))
  }

  const onSelectedDays = (dates: Date[]) => {
    setStage((prev) => ({
      stageId: StageEnum.CONFIRM,
      payload: {
        ...prev?.payload,
        dates
      }
    }))
  }

  const onExerciseReedit = () => {
    setStage((prev) => ({ ...prev, stageId: StageEnum.SELECT_EXERCISES }))
  }

  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }, [stage, setStage])

  return (
    <ThemeProvider theme={theme}>
      <NotificationContainer />
      <NextUIProvider className="default" locale="pt-BR">
        <AppHeader />

        <AppContainer style={{ justifyContent: 'start' }}>
          {stage.stageId === StageEnum.SEARCH_CLIENT && (
            <AppButtonLinkRectOutline
              href="/clients"
              text="Voltar"
              icon={<FaAngleLeft />}
            />
          )}

          {stage.stageId !== StageEnum.SEARCH_CLIENT && (
            <div style={{ width: '75vw', maxWidth: '7.44rem' }}>
              <AppButtonActionRectOutline
                fullWidth
                onClick={() =>
                  setStage((prev) => ({ ...prev, stageId: --prev.stageId }))
                }
                text="Voltar"
                icon={<FaAngleLeft />}
              />
            </div>
          )}

          <AppInternalContainer>
            {stage.stageId === StageEnum.SEARCH_CLIENT && (
              <>
                <AppInitialText
                  title="Selecione um cliente"
                  text="Insira o nome de clientes que você já atendeu em suas consultas por aqui:"
                />

                <AppProfessionalClientsSearchList onClick={onSelectedClient} />
              </>
            )}
            {stage.stageId === StageEnum.SELECT_EXERCISES && (
              <>
                <AppInitialText
                  title="Selecionar exercícios"
                  text="Selecione vários exercícios para o usuário praticar:"
                />

                <AppProfessionalExercisesSelector
                  onSelectedExercises={onSelectedExercises}
                />
              </>
            )}
            {stage.stageId === StageEnum.SELECT_DATE && (
              <>
                <AppInitialText
                  title="Selecionar datas"
                  text="Seleciona a data que em esta serie de exercícios vai ser realizada no mês:"
                />

                <AppProfessionalSetCalendarDays
                  onSelectedDays={onSelectedDays}
                />
              </>
            )}
            {stage.stageId === StageEnum.CONFIRM && (
              <>
                <AppInitialText
                  title="Confirmar ação"
                  text="Estamos quase lá! Verifique a lista de exercícios do mês e confirme a sua ação, ou volte para selecionar mais exercícios:"
                />
                <AppProfessionalConfirmBuild
                  payload={stage.payload as PlanBuildPayloadProps}
                  onMoreExercises={onExerciseReedit}
                />
              </>
            )}
          </AppInternalContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
