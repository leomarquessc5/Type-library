import { IUsersRepository } from './../../IUsersRepository';
import { IUser } from '../../../entities/User';
import { prisma } from '../../../utils/prismaConnection';

export class MongoUsersRepository implements IUsersRepository {
  async store(user: IUser): Promise<IUser> {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return newUser;
  }

  async find(id: string): Promise<IUser | null> {
    const existUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return existUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const existUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    return existUser;
  }

  async update(id: string, data: IUser): Promise<IUser | null> {
    console.log(data);
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return updatedUser;
  }

  async delete(id: string): Promise<any> {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    return user;
  }
}
