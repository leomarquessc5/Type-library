import { IUsersRepository } from './../../IUsersRepository';
import { IUser } from '../../../entities/User';
import { User } from './schemas/User';

export class MongoUsersRepository implements IUsersRepository {
  async store(user: IUser): Promise<IUser> {
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return newUser.save();
  }

  async find(id: string): Promise<IUser | null> {
    const existUser = await User.findOne({ id: id }).exec();
    return existUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const existUser = await User.findOne({ email: email }).exec();
    return existUser;
  }

  async update(id: string, data: IUser): Promise<IUser | null> {
    const updatedUser = await User.findOneAndUpdate({ id: id }, data, {
      returnDocument: 'after',
    });
    return updatedUser;
  }

  async delete(id: string): Promise<any> {
    return User.findOneAndDelete({ id: id });
  }
}
