import { IUser } from '../entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | null>;
  store(user: IUser): Promise<IUser>;
  find(id: string): Promise<IUser | null>;
  update(id: string, data: IUser): Promise<IUser | null>;
  delete(id: string): Promise<IUser | null>;
}
