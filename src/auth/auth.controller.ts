import { Controller, Get, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  login(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    return {
      message: 'Login endpoint',
      username,
      password,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };
  }
}
