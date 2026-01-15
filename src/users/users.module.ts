import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
})
class UsersModule {}

export { UsersModule };
