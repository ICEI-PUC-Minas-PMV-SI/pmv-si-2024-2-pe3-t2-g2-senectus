import { LoginLoadingStyle } from './LoginLoadingStyle'
import { SpinnerLoading } from './SpinnerLoading'

export function LoginLoading() {
  return (
    <LoginLoadingStyle>
      <SpinnerLoading className="load" />
      <h3>Aguarde!</h3>
      <p>Acessando a sua conta...</p>
    </LoginLoadingStyle>
  )
}
