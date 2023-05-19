import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(emai: string): Promise<User>;
  save(user: User): Promise<void>;
}
