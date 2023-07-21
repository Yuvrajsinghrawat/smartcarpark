// src/vehicle/vehicle.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { VehicleService } from '../Service/vehicle.service';
import { AddVehicleDTO } from '../DTO/add-Vehicle.dto';

@Controller('account/vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('add')
  async addVehicle(@Body() addVehicleDto: AddVehicleDTO) {
    return await this.vehicleService.addVehicle(addVehicleDto);
  }
}
