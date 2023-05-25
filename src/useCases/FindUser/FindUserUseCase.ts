import { IUsersRepository } from '../../repositories/IUsersRepository';

export class FindUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.find(id);

    if (!user) {
      throw new Error('Error on search user');
    }

    return user;
  }
}
