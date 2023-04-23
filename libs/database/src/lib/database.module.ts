import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * DatabaseModule class.
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        logging: configService.get('database.logging'),
        retryAttempts: 10,
        retryDelay: 3000,
        entities: [__dirname + '/entities/**/*.entity.ts'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
