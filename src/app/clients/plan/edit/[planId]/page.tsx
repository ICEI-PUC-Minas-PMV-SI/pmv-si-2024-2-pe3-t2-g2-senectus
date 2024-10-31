'use client'

import { useMemo } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { PlanBuildStageEnum } from '@components/clients/professionals/sharedProps/PlanBuilderStage'
import { GetRandomTrainingPlanService } from '@core/services/seed/trainingPlan/GetRandomTrainingPlanService'
import { AppProfessionalPlanManager } from '@components/clients/professionals/planBuilder/AppProfessionalPlanManager'

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
    <AppProfessionalPlanManager
      initialStage={PlanBuildStageEnum.CONFIRM}
      preLoadedTrainingPlan={trainingPlan}
      skipClientSelection
    />
  )
}
