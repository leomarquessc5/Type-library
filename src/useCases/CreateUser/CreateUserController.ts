import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.send(newUser).status(201);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
