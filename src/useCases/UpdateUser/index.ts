import { MongoUsersRepository } from '../../repositories/implementations/mongoDB/MongoUsersRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(mongoUsersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
