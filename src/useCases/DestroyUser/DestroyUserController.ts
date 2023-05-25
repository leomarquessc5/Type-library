import { Request, Response } from 'express';
import { DestroyUserUseCase } from './DestroyUserUseCase';

export class DestroyUserController {
  constructor(private destroyUserUseCase: DestroyUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const deletedUser = await this.destroyUserUseCase.execute(id);

      return response.status(200).send(deletedUser);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Error on delete user ID',
      });
    }
  }
}
