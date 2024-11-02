import { FormattedPlanProps } from '../crud/SearchTrainingPlanService'

export class SortPlanByAscProgress {
  static exec(plans: FormattedPlanProps[]) {
    const clones = [...plans]
    clones.sort((c1, c2) => {
      if (c1.progress < c2.progress) return -1
      if (c1.progress > c2.progress) return 1
      return 0
    })
    return clones
  }
}
