import { ProfessionalEntity } from '@core/models/ProfessionalEntity'
import { UserEntityTypeEnum } from '@core/models/UserEntity'
import { TokenRepo } from '@core/repositories/TokenRepo'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
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
import { LoginLoading } from '../components/common/Loadings/LoginLoading'

export interface LoginProviderContext {
  token: JWTTokenType
}

interface ProviderProps {
  auth: LoginProviderContext
  setAuth: Dispatch<SetStateAction<LoginProviderContext>>
}

interface LoginProviderProps {
  children: ReactNode
  userType?: UserEntityTypeEnum
}

export const LoginContext = createContext({} as ProviderProps)

export function LoginProvider({ children, userType }: LoginProviderProps) {
  const router = useRouter()
  const [auth, setAuth] = useState({} as LoginProviderContext)

  useEffect(() => {
    if (!window) return

    const token = TokenRepo.get()
    const user = GetUserInfoService.exec<ProfessionalEntity>()
    if (!token || (userType && token.type !== userType) || !user) {
      router.push('/login')
      return
    }

    const nonFinishedProfessionalAccount =
      token?.type === 'PROFESSIONAL' &&
      (!user.job ||
        !user.startedAtInMilli ||
        !user.services ||
        user.services.length <= 0 ||
        !user.address ||
        !user.city ||
        !user.state ||
        !user.phoneNumber)
    if (
      nonFinishedProfessionalAccount &&
      window.location.pathname !== '/configuration'
    ) {
      router.push('/configuration')
      return
    }

    setAuth({ token })
  }, [setAuth, userType, router])

  if (!auth?.token) return <LoginLoading />

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      {children}
    </LoginContext.Provider>
  )
}
