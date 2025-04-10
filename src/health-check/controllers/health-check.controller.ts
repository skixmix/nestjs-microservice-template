import { Controller, Get, HttpStatus, Inject } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClassTransformerMapper } from '../../utils/mapper/class-transformer-mapper';
import { HealthCheckResponseDTO, IHealthCheckResponseDTO } from '../dtos/health-check-result.dto';
import { HealthCheckService } from '../services/health-check.service';

@ApiTags('health-check')
@Controller('status')
export class HealthCheckController {
    constructor(
        @Inject(HealthCheckService)
        private readonly _healthCheckService: HealthCheckService,
    ) {}

    @ApiResponse({
        status: HttpStatus.OK,
        type: HealthCheckResponseDTO,
        description: 'The microservice is up and running',
    })
    @Get()
    public async healthCheck(): Promise<IHealthCheckResponseDTO> {
        const healthStatus = await this._healthCheckService.getHealthStatus();

        const mappedHealthStatusToDTO = ClassTransformerMapper.map(HealthCheckResponseDTO, healthStatus);

        return mappedHealthStatusToDTO;
    }
}
