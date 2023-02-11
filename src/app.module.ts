import {
  Appointment,
  Client,
  DatabaseModule,
  Pet,
  Procedure,
  ProcedureCategory,
  User,
} from '@app/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'config/configuration';
import { UsersModule } from './users/users.module';

/**
 * AppModule class.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([
      Appointment,
      Client,
      Pet,
      Procedure,
      ProcedureCategory,
      User,
    ]),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
