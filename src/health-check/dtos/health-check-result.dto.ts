import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export interface IHealthCheckResponseDTO {
    isOperating: boolean;
}

export class HealthCheckResponseDTO implements IHealthCheckResponseDTO {
    @ApiProperty()
    @Expose()
    isOperating: boolean;
}
