'use client'

import { useMemo } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { PlanBuildStageEnum } from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import PlanBuilderScreen from '../../new/page'
import { GetRandomTrainingPlanService } from '@core/services/seed/trainingPlan/GetRandomTrainingPlanService'

interface EditPlanBuilderScreenProps {
  params: {
    planId: string
  }
}

export default function EditPlanBuilderScreen(
  props: EditPlanBuilderScreenProps
) {
  console.log(props)
  const trainingPlan = useMemo(() => GetRandomTrainingPlanService.exec(), [])

  return (
    <PlanBuilderScreen
      initialStage={PlanBuildStageEnum.CONFIRM}
      preLoadedTrainingPlan={trainingPlan}
      skipClientSelection
    />
  )
}
