import {IUsersService} from './users.service.interface'
import {UserJoinDto} from './dto/user-join.dto'
import {UserLoginDto} from './dto/user-login.dto'
import {User} from './user.entity'
import {injectable} from 'inversify'
import 'reflect-metadata'

@injectable()
export class UsersService implements IUsersService {
  async createUser({email, name, password}: UserJoinDto): Promise<User | null> {
    const newUser = new User(email, name)
    await newUser.setPassword(password)

    /**
     * Проверка пользователь есть ли пользователь:
     * Если есть - вернуть null
     * Если нету - создать*/
    // return null
    return newUser
  }

  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }

}
