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

enum StageEnum {
  SEARCH_CLIENT = 0,
  SELECT_EXERCISES = 1,
  SELECT_DATE = 2,
  CONFIRM = 3
}

interface StageContextProps {
  stageId: StageEnum
  payload?: {
    client?: ClientEntity
    exercises?: ExerciseEntity[]
  }
}

export default function PlanBuilderScreen() {
  const [stage, setStage] = useState<StageContextProps>({
    stageId: StageEnum.SEARCH_CLIENT
  })

  const onSelectedClient = (client: ClientEntity) => {
    setStage((prev) => ({
      ...prev,
      stageId: StageEnum.SELECT_EXERCISES,
      client
    }))
  }

  const onSelectedExercises = (exercises: ExerciseEntity[]) => {
    setStage((prev) => ({ ...prev, stageId: StageEnum.SELECT_DATE, exercises }))
  }

  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }, [stage, setStage])

  return (
    <ThemeProvider theme={theme}>
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

                <AppProfessionalSetCalendarDays />
              </>
            )}
          </AppInternalContainer>
        </AppContainer>
      </NextUIProvider>
    </ThemeProvider>
  )
}
