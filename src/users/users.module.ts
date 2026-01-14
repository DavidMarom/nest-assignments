import { Module, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
})
class UsersModule {}

@Controller('users')
class UsersController {
  @Get()
  getHello(): string {
    return 'Hello from UsersController';
  }
}
export { UsersModule, UsersController };
