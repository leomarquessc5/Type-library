import { Request, Response } from 'express';
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase';

export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const user = await this.findUserByEmailUseCase.execute(email);

      return response.status(200).send(user);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Error on search user email',
      });
    }
  }
}
