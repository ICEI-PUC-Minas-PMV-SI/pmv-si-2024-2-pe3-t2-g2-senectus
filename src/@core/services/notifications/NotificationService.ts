import { ServiceError } from '@core/errors/ServiceError'
import { toast } from 'react-toastify'

export enum NotificationTypeEnum {
  WARN = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

export class NotificationService {
  static dispatch(type: NotificationTypeEnum, text: string) {
    toast[type](text)
  }

  static listenForServiceErrors() {
    addEventListener('error', (event) => {
      if (event.error instanceof ServiceError)
        NotificationService.dispatch(
          NotificationTypeEnum.ERROR,
          event.error.message
        )
    })
  }
}
