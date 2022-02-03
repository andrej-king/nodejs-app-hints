import {IUsersRepository} from './users.repository.interface'
import {UserModel} from '@prisma/client'
import {inject, injectable} from 'inversify'
import 'reflect-metadata'
import {TYPES} from '../types'
import {PrismaService} from '../database/prisma.service'

@injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @inject(TYPES.PrismaService) private prismaService: PrismaService
  ) {}

  async create({email, password, name}: User): Promise<UserModel> {
    return this.prismaService.client.userModel.create({
      data: {email, password, name}
    })
  }

  find(email: string): Promise<UserModel | null> {
    return this.prismaService.client.findFirst({
      where: {email}
    })
  }
}
