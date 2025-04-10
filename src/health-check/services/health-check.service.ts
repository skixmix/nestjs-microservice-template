import { Injectable } from '@nestjs/common';
import { HealthStatusEntity, IHealthStatusEntity } from '../entities/health-status.entity';
import { IHealthCheckService } from './health-check.service.interface';

@Injectable()
export class HealthCheckService implements IHealthCheckService {
    public async getHealthStatus(): Promise<IHealthStatusEntity> {
        const responseEntity = new HealthStatusEntity();
        responseEntity.isOperating = true;

        return responseEntity;
    }
}
