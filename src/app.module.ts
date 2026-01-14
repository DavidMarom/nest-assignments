import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { ShiftsModule } from './shifts/shifts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // SequelizeModule.forRoot({
    //   dialect: 'postgres', // או mysql / sqlite
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'db_user',
    //   password: 'db_pass',
    //   database: 'db_name',
    //   autoLoadModels: true,
    //   synchronize: true, // ⚠️ רק לפיתוח
    // }),
    AssignmentsModule,
    ShiftsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
