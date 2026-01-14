import { Controller, Get, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  login(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    return { message: 'Login endpoint', username, password };
  }
}
