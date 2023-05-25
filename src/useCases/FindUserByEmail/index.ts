import { MongoUsersRepository } from '../../repositories/implementations/mongoDB/MongoUsersRepository';
import { FindUserByEmailController } from './FindUserByEmailController';
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const findUserByEmailUseCase = new FindUserByEmailUseCase(mongoUsersRepository);

const findUserByEmailController = new FindUserByEmailController(
  findUserByEmailUseCase,
);

export { findUserByEmailUseCase, findUserByEmailController };
