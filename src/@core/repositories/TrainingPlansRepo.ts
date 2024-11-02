import { TrainingPlanEntity } from '@core/models/TrainingPlanEntity'

interface TrainingPlansCollection {
  trainingPlans: string[]
}

export class TrainingPlansRepo {
  private static trainingPlanCollectionId = 'trainingPlans'
  static set(plan: TrainingPlanEntity) {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) {
      const collection: TrainingPlansCollection = {
        trainingPlans: [plan.serialize()]
      }
      return localStorage.setItem(
        TrainingPlansRepo.trainingPlanCollectionId,
        JSON.stringify(collection)
      )
    }

    const searchedTrainingPlanIndex = trainingPlans.findIndex(
      (item) => item.id === plan.id
    )
    if (searchedTrainingPlanIndex >= 0)
      trainingPlans[searchedTrainingPlanIndex] = plan
    else trainingPlans.push(plan)

    const serializedTrainingPlans = trainingPlans.map((item) =>
      item.serialize()
    )
    const collection: TrainingPlansCollection = {
      trainingPlans: serializedTrainingPlans
    }
    localStorage.setItem(
      TrainingPlansRepo.trainingPlanCollectionId,
      JSON.stringify(collection)
    )
  }

  static deleteById(id: string) {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) return

    const searchedTrainingPlanIndex = trainingPlans.findIndex(
      (item) => item.id === id
    )
    if (!searchedTrainingPlanIndex) return

    trainingPlans.splice(searchedTrainingPlanIndex, 1)

    const serializedTrainingPlans = trainingPlans.map((item) =>
      item.serialize()
    )
    const collection: TrainingPlansCollection = {
      trainingPlans: serializedTrainingPlans
    }
    localStorage.setItem(
      TrainingPlansRepo.trainingPlanCollectionId,
      JSON.stringify(collection)
    )
  }

  static findAllByOwnerId(id: string): TrainingPlanEntity[] {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) return []

    const matches: TrainingPlanEntity[] = []
    for (let i = 0; i < trainingPlans.length; i++) {
      const item = trainingPlans[i]
      if (item.owner === id) matches.push(item)
    }
    return matches
  }

  static findByClientId(id: string): TrainingPlanEntity | undefined {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) return

    const searchedTrainingPlan = trainingPlans.find(
      (item) => item.client === id
    )
    return searchedTrainingPlan ?? undefined
  }

  static findByOwnerIdAndClientId(
    ownerId: string,
    clientId: string
  ): TrainingPlanEntity | undefined {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) return

    const searchedTrainingPlan = trainingPlans.find(
      (item) => item.owner === ownerId && item.client === clientId
    )
    return searchedTrainingPlan ?? undefined
  }

  static findById(id: string): TrainingPlanEntity | undefined {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (!trainingPlans) return

    const searchedTrainingPlan = trainingPlans.find((item) => item.id === id)
    return searchedTrainingPlan ?? undefined
  }

  private static getSource(): TrainingPlanEntity[] | undefined {
    const trainingPlansSerializedCollection = localStorage.getItem(
      TrainingPlansRepo.trainingPlanCollectionId
    )
    if (!trainingPlansSerializedCollection) return

    const trainingPlanJsonCol: TrainingPlansCollection = JSON.parse(
      trainingPlansSerializedCollection
    )
    const trainingPlans: TrainingPlanEntity[] =
      trainingPlanJsonCol.trainingPlans.map((item) =>
        TrainingPlanEntity.deserialize(item)
      )
    return trainingPlans
  }
}
