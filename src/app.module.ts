import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckModule } from './health-check/health-check.module';

const databaseConnectionModule = TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
});

@Module({
    imports: [databaseConnectionModule, ConfigModule.forRoot(), HealthCheckModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
