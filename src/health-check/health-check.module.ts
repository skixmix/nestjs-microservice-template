import { Module } from '@nestjs/common';
import { HealthCheckController } from './controllers/health-check.controller';
import { HealthCheckService } from './services/health-check.service';

@Module({
    imports: [],
    providers: [HealthCheckService],
    controllers: [HealthCheckController],
})
export class HealthCheckModule {}
