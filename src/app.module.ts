import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { ShiftsModule } from './shifts/shifts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // או mysql / sqlite
      host: 'localhost',
      port: 3307,
      username: 'myuser',
      password: 'mypassword',
      database: 'myappdb',
      autoLoadModels: true,
      synchronize: true, // ⚠️ רק לפיתוח
    }),
    AssignmentsModule,
    ShiftsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
