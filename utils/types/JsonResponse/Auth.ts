import type { User } from '../../models/User'

export interface JsonAuthResponse {
  success: boolean
  message: string
  data: AuthObject
}

interface AuthObject {
  token: string
  user: User
}
