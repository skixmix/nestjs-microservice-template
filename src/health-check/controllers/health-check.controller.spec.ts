import { HealthCheckResponseDTO } from '../dtos/health-check-result.dto';
import { HealthStatusEntity } from '../entities/health-status.entity';
import { HealthCheckService } from '../services/health-check.service';
import { IHealthCheckService } from '../services/health-check.service.interface';
import { HealthCheckController } from './health-check.controller';

jest.mock('../services/health-check.service');

describe('HealthCheckController', () => {
    let mockHealthCheckService: jest.Mocked<IHealthCheckService>;
    let controller: HealthCheckController;

    beforeEach(() => {
        mockHealthCheckService = jest.mocked(HealthCheckService.prototype);
        controller = new HealthCheckController(mockHealthCheckService);
    });

    afterEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    describe('healthCheck', () => {
        it('should call the health check service', async () => {
            await controller.healthCheck();

            expect(mockHealthCheckService.getHealthStatus).toHaveBeenCalled();
        });

        it('should return the proper DTO response', async () => {
            const fakeServiceResponse = new HealthStatusEntity();
            fakeServiceResponse.isOperating = true;

            mockHealthCheckService.getHealthStatus.mockResolvedValue(fakeServiceResponse);

            const response = await controller.healthCheck();

            expect(response).toBeInstanceOf(HealthCheckResponseDTO);
            expect(response.isOperating).toBe(fakeServiceResponse.isOperating);
        });
    });
});
