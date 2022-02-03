import {IUsersService} from './users.service.interface'
import {UserJoinDto} from './dto/user-join.dto'
import {UserLoginDto} from './dto/user-login.dto'
import {User} from './user.entity'
import {inject, injectable} from 'inversify'
import 'reflect-metadata'
import {TYPES} from '../types'
import {IConfigService} from '../config/config.service.interface'

@injectable()
export class UsersService implements IUsersService {
  constructor(
    @inject(TYPES.ConfigService) private configService: IConfigService
  ) {}

  async createUser({email, name, password}: UserJoinDto): Promise<User | null> {
    const newUser = new User(email, name)
    const salt = this.configService.get('SALT')
    await newUser.setPassword(password, Number(salt))

    /**
     * Проверка пользователь есть ли пользователь:
     * Если есть - вернуть null
     * Если нету - создать*/
    // return null
    return newUser
  }

  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true
  }
}
