import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return { message: 'All users' };
  }

  @Post()
  async create(@Body() body: { name: string; password: string }) {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
    });
    await sequelize.query('INSERT INTO users (name, password) VALUES (?, ?)', {
      replacements: [body.name, body.password],
    });
    return { message: 'User created', user: body };
  }
}
