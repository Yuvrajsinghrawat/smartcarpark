// src/vehicle/vehicle.service.ts
import { Injectable } from '@nestjs/common';
import { AddVehicleDTO ,VehicleDTO} from '../DTO/add-Vehicle.dto';
import { Vehicle } from '../Entity/vehicle.entity';
import * as fs from 'fs';

@Injectable()
export class VehicleService {
private dataFilePath = 'vehicles.json';

  private loadData(): VehicleDTO[] {
    try {
      const data = fs.readFileSync(this.dataFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private saveData(data: VehicleDTO[]): void {
    fs.writeFileSync(this.dataFilePath, JSON.stringify(data));
  }

  async addVehicle(addVehicleDto: AddVehicleDTO): Promise<VehicleDTO[]> {
    const { vehicleList, customerId } = addVehicleDto;
    const vehicles: VehicleDTO[] = this.loadData();
    const updatedVehicles: VehicleDTO[] = vehicleList.map(vehicleDto => ({
      ...vehicleDto,
      customerId,
    }));
    vehicles.push(...updatedVehicles);
    this.saveData(vehicles);
    return vehicles;
  }
}
