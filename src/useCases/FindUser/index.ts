import { MongoUsersRepository } from '../../repositories/implementations/mongoDB/MongoUsersRepository';
import { FindUserController } from './FindUserController';
import { FindUserUseCase } from './FindUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const findUserUseCase = new FindUserUseCase(mongoUsersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController };
