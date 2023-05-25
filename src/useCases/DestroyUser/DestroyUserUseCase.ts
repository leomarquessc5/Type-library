import { IUsersRepository } from './../../repositories/IUsersRepository';

export class DestroyUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    return this.usersRepository.delete(id);
  }
}
