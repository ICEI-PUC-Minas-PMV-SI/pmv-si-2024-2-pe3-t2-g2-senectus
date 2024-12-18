import {
  TrainingPlanEntity,
  TrainingPlanExercise
} from '@core/models/TrainingPlanEntity'
import { v4 as uuid } from 'uuid'

interface TrainingPlansCollection {
  trainingPlans: string[]
}

export class TrainingPlansRepo {
  private static trainingPlanCollectionId = 'trainingPlans'
  static async set(plan: TrainingPlanEntity) {
    const trainingPlans = TrainingPlansRepo.getSource()
    TrainingPlansRepo.makeExercisesPersistentFriendly(plan)

    if (trainingPlans.length <= 0) {
      const collection: TrainingPlansCollection = {
        trainingPlans: [plan.serialize()]
      }
      localStorage.setItem(
        TrainingPlansRepo.trainingPlanCollectionId,
        JSON.stringify(collection)
      )
      return plan
    }

    const searchedTrainingPlanIndex = trainingPlans.findIndex(
      (item) => item.id === plan.id
    )
    if (searchedTrainingPlanIndex >= 0)
      trainingPlans[searchedTrainingPlanIndex] = plan
    else {
      trainingPlans.push(plan)
    }

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

    return plan
  }

  static deleteById(id: string) {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (trainingPlans.length <= 0) return

    const searchedTrainingPlanIndex = trainingPlans.findIndex(
      (item) => item.id === id
    )
    if (searchedTrainingPlanIndex < 0) return

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
    if (trainingPlans.length <= 0) return []

    const matches: TrainingPlanEntity[] = []
    for (let i = 0; i < trainingPlans.length; i++) {
      const item = trainingPlans[i]
      if (item.owner === id) matches.push(item)
    }
    return matches
  }

  static findByClientId(id: string): TrainingPlanEntity | undefined {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (trainingPlans.length <= 0) return

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
    if (trainingPlans.length <= 0) return

    const searchedTrainingPlan = trainingPlans.find(
      (item) => item.owner === ownerId && item.client === clientId
    )
    return searchedTrainingPlan ?? undefined
  }

  static findByIdAndOwnerId(
    id: string,
    ownerId: string
  ): TrainingPlanEntity | undefined {
    const trainingPlans = TrainingPlansRepo.getSource()
    if (trainingPlans.length <= 0) return

    const searchedTrainingPlan = trainingPlans.find(
      (item) => item.id === id && item.owner === ownerId
    )
    return searchedTrainingPlan ?? undefined
  }

  private static getSource(): TrainingPlanEntity[] {
    const trainingPlansSerializedCollection = localStorage.getItem(
      TrainingPlansRepo.trainingPlanCollectionId
    )
    if (!trainingPlansSerializedCollection) return []

    const trainingPlanJsonCol: TrainingPlansCollection = JSON.parse(
      trainingPlansSerializedCollection
    )
    const trainingPlans: TrainingPlanEntity[] =
      trainingPlanJsonCol.trainingPlans.map((item) =>
        TrainingPlanEntity.deserialize(item)
      )
    return trainingPlans
  }

  private static makeExercisesPersistentFriendly(plan: TrainingPlanEntity) {
    const exerciseList: TrainingPlanExercise[] = []

    plan.exerciseStacks.forEach((stack) => {
      stack.dateInMilliList.forEach((date) => {
        stack.exercises.forEach((exercise) => {
          const clone = exercise.clone()
          clone.id = uuid()
          const hrefArr = clone.href!.split('/')
          hrefArr.pop()
          clone.dateInMilli = date
          clone.href = `${hrefArr.join().replaceAll(',', '/')}/${clone.id}`

          exerciseList.push({
            inMemoryPath: exercise.id,
            content: clone
          })
        })
      })
    })

    exerciseList.forEach((exercise) => {
      const search = plan.exerciseList.find(
        (item) =>
          item.inMemoryPath === exercise.inMemoryPath &&
          item.content.dateInMilli === exercise.content.dateInMilli
      )
      if (!search) return

      exercise.content.state = search.content.state
      exercise.content.id = search.content.id
      const hrefArr = exercise.content.href!.split('/')
      hrefArr.pop()
      exercise.content.href = `${hrefArr.join().replaceAll(',', '/')}/${exercise.content.id}`
    })

    plan.exerciseList = exerciseList
  }
}
