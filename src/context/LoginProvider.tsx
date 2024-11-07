import { AppContainer } from '@components/common/Container/AppContainer'
import { SpinnerLoading } from '@components/common/Loadings/SpinnerLoading'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { TokenRepo } from '@core/repositories/TokenRepo'
import {
  NotificationService,
  NotificationTypeEnum
} from '@core/services/notifications/NotificationService'
import { JWTTokenType } from '@core/tokens/JWTTokenType'
import { useRouter } from 'next/navigation'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'

export interface LoginProviderContext {
  token: JWTTokenType
}

interface ProviderProps {
  auth: LoginProviderContext
  setAuth: Dispatch<SetStateAction<LoginProviderContext>>
}

interface LoginProviderProps {
  children: ReactNode
  userType: UserEntityTypeEnum
}

export const LoginContext = createContext({} as ProviderProps)

export function LoginProvider({ children, userType }: LoginProviderProps) {
  const router = useRouter()
  const [auth, setAuth] = useState({} as LoginProviderContext)

  useEffect(() => {
    if (!window) return

    const token = TokenRepo.get()
    if (!token || token.type !== userType) {
      NotificationService.dispatch(
        NotificationTypeEnum.ERROR,
        'A sua conta não pode realizar esta ação.'
      )
      router.push('/login')
      return
    }

    setAuth({ token })
  }, [setAuth, userType])

  if (!auth?.token)
    return (
      <AppContainer>
        <SpinnerLoading className="load" />
        <h3>Aguarde!</h3>
        <p>Conectando a sua conta...</p>
      </AppContainer>
    )

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      {children}
    </LoginContext.Provider>
  )
}
