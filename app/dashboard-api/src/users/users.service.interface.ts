import {UserJoinDto} from './dto/user-join.dto'
import {User} from './user.entity'
import {UserLoginDto} from './dto/user-login.dto'

export interface IUsersService {
  createUser: (dto: UserJoinDto) => Promise<User | null>
  validateUser: (dto: UserLoginDto) => Promise<boolean>
}
