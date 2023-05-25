import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    try {
      const updatedUser = await this.updateUserUseCase.execute(id, data);

      return response.status(200).json(updatedUser);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error on update user',
      });
    }
  }
}
