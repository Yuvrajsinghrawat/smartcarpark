// src/vehicle/vehicle.module.ts
import { Module } from '@nestjs/common';
import { VehicleController } from './Controller/vehicle.controller';
import { VehicleService } from './Service/vehicle.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
