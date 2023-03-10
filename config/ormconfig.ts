import { ConfigModule } from '@nestjs/config/dist/config.module';
import InitSeeder from 'libs/database/seeders/init.seeder';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const options = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  logging: process.env.DATABASE_LOGGING,
  entities: [__dirname + '/../libs/database/src/entities/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../libs/database/migrations/**/*.ts'],
  seeds: [InitSeeder],
};

export const dataSource = new DataSource(
  options as DataSourceOptions & SeederOptions,
);
