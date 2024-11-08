import { SignUpFormProps } from '@components/signup/AppFormSignUp'
import { UsersRepo } from './UsersRepo'
import { RepositoryError } from '@core/errors/RepositoryError'

export class PreSignupRepo {
  static register(form: SignUpFormProps) {
    const user = UsersRepo.findByEmailWithoutType(form.email)
    if (user) throw new RepositoryError('Está conta já existe')

    localStorage.setItem('pre-signup', JSON.stringify(form))
  }

  static unregister() {
    localStorage.removeItem('pre-signup')
  }

  static get() {
    const data = localStorage.getItem('pre-signup')
    return data ? (JSON.parse(data) as SignUpFormProps) : null
  }
}
