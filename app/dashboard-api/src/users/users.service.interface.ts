import {UserJoinDto} from './dto/user-join.dto'
import {UserLoginDto} from './dto/user-login.dto'
import {UserModel} from '@prisma/client'

export interface IUsersService {
  createUser: (dto: UserJoinDto) => Promise<UserModel | null>
  validateUser: (dto: UserLoginDto) => Promise<boolean>
  getUserInfo: (email: string) => Promise<UserModel | null>
}
