import { Expose } from 'class-transformer';

export interface IHealthStatusEntity {
    isOperating: boolean;
}

export class HealthStatusEntity implements IHealthStatusEntity {
    @Expose()
    isOperating: boolean;
}
