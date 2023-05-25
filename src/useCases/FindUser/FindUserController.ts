import { Request, Response } from 'express';
import { FindUserUseCase } from './FindUserUseCase';

export class FindUserController {
  constructor(private findUserUseCase: FindUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.findUserUseCase.execute(id);

      return response.status(200).send(user);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Error on search user ID',
      });
    }
  }
}
