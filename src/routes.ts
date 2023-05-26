import { Router } from 'express';
import { findUserByEmailController } from './useCases/FindUserByEmail';
import { findUserController } from './useCases/FindUser';
import { destroyUserController } from './useCases/DestroyUser';
import { updateUserController } from './useCases/UpdateUser';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Type Lib API');
});

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

router.get('/users/:id', (req, res) => {
  return findUserController.handle(req, res);
});

router.get('/users/email/:email', (req, res) => {
  return findUserByEmailController.handle(req, res);
});

router.put('/users/:id', (req, res) => {
  return updateUserController.handle(req, res);
});

router.delete('/users/:id', (req, res) => {
  return destroyUserController.handle(req, res);
});

export { router };
