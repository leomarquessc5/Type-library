import { IUsersRepository } from '../../repositories/IUsersRepository';

export class FindUserByEmailUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Error on search user');
    }

    return user;
  }
}
