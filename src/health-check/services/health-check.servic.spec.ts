import { HealthStatusEntity } from '../entities/health-status.entity';
import { HealthCheckService } from './health-check.service';
import { IHealthCheckService } from './health-check.service.interface';

describe('HealthCheckService', () => {
    let service: IHealthCheckService;

    beforeEach(() => {
        service = new HealthCheckService();
    });

    afterEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    describe('getHealthStatus', () => {
        it('should return health status', async () => {
            const healthStatus = await service.getHealthStatus();

            expect(healthStatus.isOperating).toBe(true);
            expect(healthStatus).toBeInstanceOf(HealthStatusEntity);
        });
    });
});
