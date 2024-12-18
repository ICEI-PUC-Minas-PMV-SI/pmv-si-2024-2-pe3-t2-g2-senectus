'use client'

import { useContext, useEffect, useMemo, useState } from 'react'
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
import 'react-toastify/dist/ReactToastify.css'
import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

import {
  PlanBuildStageContextProps,
  PlanBuildStageEnum
} from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { ClientSelectionHandlerService } from '@core/services/plan/builder/ClientSelectionHandlerService'
import { ExercisesSelectionHandlerService } from '@core/services/plan/builder/ExercisesSelectionHandlerService'
import { DaysSelectionHandlerService } from '@core/services/plan/builder/DaysSelectionHandlerService'
import { ExerciseReeditHandlerService } from '@core/services/plan/builder/ExerciseReeditHandlerService'
import { BackButtonPlanBuilderHandler } from '@core/services/plan/builder/BackButtonPlanBuilderHandler'
import { LoginContext } from '../../../../context/LoginProvider'
import { GetTrainingPlanByIdService } from '@core/services/plan/crud/GetTrainingPlanByIdService'
import { GetClientsWithoutPlanService } from '@core/services/users/GetClientsWithoutPlanService'

interface AppProfessionalPlanManagerProps {
  initialStage?: PlanBuildStageEnum
  trainingPlanId?: string
  skipClientSelection?: boolean
}

export function AppProfessionalPlanManager(
  props: AppProfessionalPlanManagerProps
) {
  const { auth } = useContext(LoginContext)

  const preSelectedPlan = useMemo(() => {
    if (!props.trainingPlanId) return
    return GetTrainingPlanByIdService.exec(props.trainingPlanId)
  }, [props.trainingPlanId])
  const clients = useMemo(GetClientsWithoutPlanService.exec, [])

  const [stage, setStage] = useState<PlanBuildStageContextProps>({
    stageId: props.initialStage ?? PlanBuildStageEnum.SEARCH_CLIENT,
    stageHistoric: [],
    avoidScrollOnTransition: false,
    payload:
      preSelectedPlan ??
      new TrainingPlanEntity({
        owner: auth.token.id,
        client: '',
        exerciseStacks: []
      })
  })

  const onSelectedClient = (client: ClientEntity) => {
    setStage((prev) => ClientSelectionHandlerService.exec(prev, client))
  }

  const onSelectedExercises = (exercises: ExerciseEntity[]) => {
    setStage((prev) => ExercisesSelectionHandlerService.exec(prev, exercises))
  }

  const onSelectedDays = (dates: Date[]) => {
    setStage((prev) => DaysSelectionHandlerService.exec(prev, dates))
  }

  const onExerciseReedit = () => {
    setStage((prev) => ExerciseReeditHandlerService.exec(prev))
  }

  const onBackButtonClick = () => {
    BackButtonPlanBuilderHandler.exec(
      stage,
      setStage,
      props.skipClientSelection
    )
  }

  useEffect(() => {
    if (!stage.avoidScrollOnTransition)
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
  }, [stage, setStage])

  return (
    <>
      {stage.stageHistoric.length <= 0 && (
        <AppButtonLinkRectOutline
          href="/clients"
          text="Voltar"
          icon={<FaAngleLeft />}
        />
      )}

      {stage.stageHistoric.length > 0 && (
        <div style={{ width: '75vw', maxWidth: '7.44rem' }}>
          <AppButtonActionRectOutline
            fullWidth
            onClick={onBackButtonClick}
            text="Voltar"
            icon={<FaAngleLeft />}
          />
        </div>
      )}

      <AppInternalContainer>
        {stage.stageId === PlanBuildStageEnum.SEARCH_CLIENT &&
          !props.skipClientSelection && (
            <>
              <AppInitialText
                title="Selecione um cliente"
                text="Insira o nome de clientes que você já atendeu em suas consultas por aqui:"
              />

              <AppProfessionalClientsSearchList
                preRenderedClientList={clients}
                onClick={onSelectedClient}
              />
            </>
          )}
        {stage.stageId === PlanBuildStageEnum.SELECT_EXERCISES && (
          <>
            <AppInitialText
              title="Selecionar exercícios"
              text="Selecione vários exercícios para o usuário praticar:"
            />

            <AppProfessionalExercisesSelector
              onSelectedExercises={onSelectedExercises}
              preSelectedExercises={stage.payload.stackHolderRef?.exercises}
            />
          </>
        )}
        {stage.stageId === PlanBuildStageEnum.SELECT_DATE && (
          <>
            <AppInitialText
              title="Selecionar datas"
              text="Seleciona a data que em esta serie de exercícios vai ser realizada no mês:"
            />

            <AppProfessionalSetCalendarDays
              planContext={stage}
              onSelectedDays={onSelectedDays}
              preSelectedDays={stage.payload.stackHolderRef?.dateInMilliList.map(
                (milli) => new Date(milli)
              )}
            />
          </>
        )}
        {stage.stageId === PlanBuildStageEnum.CONFIRM && (
          <>
            <AppInitialText
              title="Confirmar ação"
              text="Estamos quase lá! Verifique a lista de exercícios do mês e confirme a sua ação, ou volte para selecionar mais exercícios:"
            />
            <AppProfessionalConfirmBuild
              planContext={stage}
              onMoreExercises={onExerciseReedit}
              setPlanContext={setStage}
            />
          </>
        )}
      </AppInternalContainer>
    </>
  )
}
