import { AppSearchAndFilter } from '@components/common/Inputs/SearchAndFilter/AppSearchAndFilter'
import { useContext, useEffect, useMemo, useState } from 'react'
import { ProfessionalSearchListStyle } from '../ProfessionalSearchListStyle'
import { format } from 'date-fns'
import { AppPagination } from '@components/common/Pagination/AppPagination'
import {
  AppThreeColumnTable,
  ThreeColumnTableRowsType
} from '@components/common/Tables/AppThreeColumnTable'
import { useRouter } from 'next/navigation'
import { GetAllTrainingPlansService } from '@core/services/plan/crud/GetAllTrainingPlansService'
import { SerializedTrainingPlanEntityProps } from '@core/models/TrainingPlanEntity'
import { GetUserByIdService } from '@core/services/users/GetUserByIdService'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import {
  FormattedPlanProps,
  SearchTrainingPlanService
} from '@core/services/plan/crud/SearchTrainingPlanService'
import { useDisclosure } from '@nextui-org/modal'
import { AppPlanOptionsModalAction } from '../modals/planBuilder/AppPlanOptionsModalAction'
import { AppConfirmPlanRemotionModalAction } from '../modals/planBuilder/AppConfirmPlanRemotionModalAction'
import { LoginContext } from '../../../../context/LoginProvider'
import { DeleteTrainingPlanService } from '@core/services/plan/crud/DeleteTrainingPlanService'

export type TrainingPlanFiltersType =
  | 'Conclusão (crescente)'
  | 'Conclusão (decrescente)'
  | ''

export function AppProfessionalPlanSearchList() {
  const { auth } = useContext(LoginContext)

  const router = useRouter()
  const memoizedPlans = useMemo(() => {
    const trainingPlans = GetAllTrainingPlansService.exec()
    return trainingPlans.map((item) => {
      const serializedItem: SerializedTrainingPlanEntityProps = JSON.parse(
        item.serialize()
      )
      const searchedClient = GetUserByIdService.exec(
        serializedItem.client,
        UserEntityTypeEnum.CLIENT
      )
      if (!searchedClient)
        throw new Error(
          `Não foi possível encontrar cliente no plano de treino ${item.id}`
        )

      serializedItem.client = searchedClient as unknown as string
      return serializedItem as unknown as FormattedPlanProps
    })
  }, [])

  const planActionsController = useDisclosure()
  const confirmDeleteController = useDisclosure()

  const [plans, setPlans] = useState(memoizedPlans)
  const [search, setSearch] = useState<FormattedPlanProps[]>(plans)
  const [query, setQuery] = useState({
    filter: '',
    key: ''
  })
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>()

  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(Math.ceil(search.length / 7))

  const handleSearch = (filter: string, key: string) => {
    const parsedFilter = filter as unknown as TrainingPlanFiltersType
    setSearch(SearchTrainingPlanService.exec(key, parsedFilter))
  }

  const onDelete = (planId: string) => {
    setPlans((prev) => {
      const clone = [...prev]
      const index = clone.findIndex((item) => item.id === planId)
      if (index >= 0) clone.splice(index, 1)
      return clone
    })
  }

  useEffect(() => {
    setSearch(plans)
  }, [plans])

  useEffect(() => {
    setPage(0)
    setTotal(Math.ceil(search.length / 7))
  }, [search])

  return (
    <div>
      <AppPlanOptionsModalAction
        onDelete={() => {
          planActionsController.onClose()
          confirmDeleteController.onOpen()
        }}
        onEdit={() => router.push(`/clients/plan/edit/${selectedPlanId}`)}
        controller={planActionsController}
      />
      <AppConfirmPlanRemotionModalAction
        onDelete={() => {
          DeleteTrainingPlanService.exec(String(selectedPlanId))
          onDelete(String(selectedPlanId))
          confirmDeleteController.onClose()
        }}
        onCancel={() => {
          confirmDeleteController.onClose()
          planActionsController.onOpen()
        }}
        controller={confirmDeleteController}
      />
      <ProfessionalSearchListStyle>
        <div id="input-wrapper">
          <AppSearchAndFilter
            onFilterClick={(filter) => {
              setQuery((prev) => ({ ...prev, filter }))
              handleSearch(filter, query.key)
            }}
            options={['Conclusão (crescente)', 'Conclusão (decrescente)']}
            placeholder="Insira o nome do seu cliente."
            onChange={(key) => {
              setQuery((prev) => ({ ...prev, key }))
              handleSearch(query.filter, key)
            }}
          />
        </div>

        <AppThreeColumnTable
          header={{
            firstCol: 'Cliente',
            secondCol: 'Progresso',
            thirdCol: 'Criado em'
          }}
          rows={(() => {
            const slice = search.slice(page * 7, (page + 1) * 7)
            const rows = slice.map((plan) => {
              const createdAt = new Date(plan.createdAtInMilli)
              const client = plan.client
              return {
                firstCol:
                  client.name.length > 40
                    ? client.name.substring(0, 40) + '...'
                    : client.name,
                secondCol: `${plan.progress.toFixed(2)}% concluído`,
                thirdCol: `${format(createdAt, 'dd/MM/yyyy')} às ${format(createdAt, 'HH:mm')}`,
                onClick: () => {
                  if (plan.owner === auth.token.id) {
                    setSelectedPlanId(plan.id)
                    return planActionsController.onOpen()
                  }
                  router.push(`/clients/plan/edit/${client.id}`)
                }
              }
            }) as ThreeColumnTableRowsType

            if (slice.length < 7) {
              let emptyRows: ThreeColumnTableRowsType = Array.from({
                length: 7 - slice.length
              })
              emptyRows = emptyRows.map(() => ({
                firstCol: '-',
                secondCol: '-',
                thirdCol: '-'
              }))
              rows.push(...emptyRows)
            }

            return rows
          })()}
        />
        {total > 1 && search.length > 7 && (
          <AppPagination
            className="pagination"
            total={total}
            page={page + 1}
            onChange={(page) => {
              setPage(page - 1)
            }}
          />
        )}
      </ProfessionalSearchListStyle>
    </div>
  )
}
