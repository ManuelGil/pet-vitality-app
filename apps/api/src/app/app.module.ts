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

import * as Joi from 'joi';
import { configs } from '../../../../config/apps.config';
import { UsersModule } from './users/users.module';

/**
 * AppModule class.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configs],
      validationSchema: Joi.object({
        API_PORT: Joi.number().required(),
        DATABASE_TYPE: Joi.string().required(),
        DATABASE_HOST: Joi.string().default('localhost').required(),
        DATABASE_PORT: Joi.number().default(5432).required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_DATABASE: Joi.string().required(),
        DATABASE_LOGGING: Joi.any().default(false).optional(),
        DATABASE_RETRY_ATTEMPTS: Joi.number().default(10).optional(),
        DATABASE_RETRY_DELAY: Joi.number().default(3000).optional(),
      }),
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
