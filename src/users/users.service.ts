import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  sayHello() {
    return 'Hello from UsersService';
  }
}
