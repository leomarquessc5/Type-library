import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { UsersRepository } from '../../repositories/implementations/in-memory/UsersRepository';
import { MongoUsersRepository } from '../../repositories/implementations/mongoDB/MongoUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  mailtrapMailProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
