import { createParamDecorator } from '@nestjs/common';

export interface User {
  id: string;
}

export const User = createParamDecorator((data, req) => {
  const user: User = req.user || { id: 'todo: use auth' };
  return user;
});
