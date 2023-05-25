import { IUsersRepository } from './../../repositories/IUsersRepository';
import { IUser } from '../../entities/User';
import { IUpdateUserRequestDTO } from './UpdateUserDTO';

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string, data: IUpdateUserRequestDTO) {
    const productExists = await this.usersRepository.find(id);

    if (!productExists) {
      throw new Error('This user does`t exists');
    }

    const user = new IUser(data);
    return this.usersRepository.update(id, user);
  }
}
