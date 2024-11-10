import { v4 as uuid } from 'uuid'

export class AvoidDayOverflowService {
  static exec(actualDayIndex: number, monthDaysLastIndex: number) {
    const isOverflow = actualDayIndex > monthDaysLastIndex
    if (isOverflow) {
      return <li key={uuid()} className="empty-day"></li>
    }
  }
}
