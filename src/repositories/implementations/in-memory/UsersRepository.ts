import { IUser } from "../../../entities/User";
import { IUsersRepository } from "../../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  async findByEmail(email: string): Promise<IUser> {
    try {
      const user = this.users.find((user) => user.email === email);
      return user!;
    } catch (error) {
      throw error;
    }
  }

  async store(user: IUser): Promise<IUser> {
    this.users.push(user);
    return user;
  }

  async find(id: string): Promise<IUser | null> {
    const found = this.users.find((element) => element.id === id);
    if (found) {
      return found;
    }

    return null;
  }

  async update(id: string, data: IUser): Promise<IUser | null> {
    return null;
  }

  async delete(id: string): Promise<null> {
    return null;
  }
}
