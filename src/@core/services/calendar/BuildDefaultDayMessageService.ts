export class BuildDefaultDayMessageService {
  static exec(eventsLength: number) {
    const displayText =
      eventsLength > 0
        ? `Você tem ${
            eventsLength > 10 ? '+10' : eventsLength
          } compromisso${eventsLength > 1 ? 's' : ''}`
        : ''
    return displayText
  }
}
