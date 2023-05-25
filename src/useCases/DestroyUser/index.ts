import { MongoUsersRepository } from '../../repositories/implementations/mongoDB/MongoUsersRepository';
import { DestroyUserController } from './DestroyUserController';
import { DestroyUserUseCase } from './DestroyUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const destroyUserUseCase = new DestroyUserUseCase(mongoUsersRepository);

const destroyUserController = new DestroyUserController(destroyUserUseCase);

export { destroyUserUseCase, destroyUserController };
