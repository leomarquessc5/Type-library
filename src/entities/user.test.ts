import { test, expect } from 'vitest';
import { IUser } from './User';

test('create an user', () => {
  const user = new IUser({
    name: 'FooBar',
    password: '123456',
    email: 'email@email.com',
  });

  expect(user).toBeInstanceOf(IUser);
  expect(user.name).toEqual('FooBar');
});
