import { toast } from 'react-toastify'

export enum NotificationTypeEnum {
  WARN = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info'
}

export class NotificationService {
  static dispatch(type: NotificationTypeEnum, text: string) {
    toast[type](text)
  }
}
