import { ToastContainer, Bounce } from 'react-toastify'
import { useEffect } from 'react'
import { NotificationService } from '@core/services/notifications/NotificationService'

export function NotificationContainer() {
  useEffect(() => {
    NotificationService.listenForServiceErrors()
  })

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop
      closeOnClick
      pauseOnHover
      pauseOnFocusLoss
      draggable
      theme="light"
      transition={Bounce}
    />
  )
}
