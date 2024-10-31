import { ToastContainer, Bounce } from 'react-toastify'

export function NotificationContainer() {
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
