import { IHealthStatusEntity } from '../entities/health-status.entity';

export interface IHealthCheckService {
    getHealthStatus(): Promise<IHealthStatusEntity>;
}
