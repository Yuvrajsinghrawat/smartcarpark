// src/vehicle/vehicle.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';
import { VehicleDTO } from '../DTO/add-Vehicle.dto';
import * as fs from 'fs';

describe('VehicleService', () => {
  let service: VehicleService;
  const dataFilePath = 'vehicles.json';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleService],
    }).compile();

    service = module.get<VehicleService>(VehicleService);

    // Clear the data file before each test
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addVehicle', () => {
    it('should add a vehicle to the data file', async () => {
      const addVehicleDto = {
        uuid: '123',
        vehicleList: [
          {
            type: 'privateCar',
            lpn: 'ABC123',
            brand: 35,
            touchFree: '1',
            safeExit: '0',
            isEVCharge: '0',
          },
        ],
        customerId: '456',
      };

      const expectedData: VehicleDTO[] = [
        {
          type: 'privateCar',
          lpn: 'ABC123',
          brand: 35,
          touchFree: '1',
          safeExit: '0',
          isEVCharge: '0',
        },
      ];

      await service.addVehicle(addVehicleDto);

      const data = fs.readFileSync(dataFilePath, 'utf8');
      const parsedData = JSON.parse(data);

      expect(parsedData).toEqual(expectedData);
    });

    it('should add multiple vehicles to the data file', async () => {
      const addVehicleDto = {
        uuid: '123',
        vehicleList: [
          {
            type: 'privateCar',
            lpn: 'ABC123',
            brand: 35,
            touchFree: '1',
            safeExit: '0',
            isEVCharge: '0',
          },
          {
            type: 'motorcycle',
            lpn: 'XYZ789',
            brand: 52,
            touchFree: '1',
            safeExit: '0',
            isEVCharge: '0',
          },
        ],
        customerId: '456',
      };

      const expectedData: VehicleDTO[] = [
        {
          type: 'privateCar',
          lpn: 'ABC123',
          brand: 35,
          touchFree: '1',
          safeExit: '0',
          isEVCharge: '0',
        },
        {
          type: 'motorcycle',
          lpn: 'XYZ789',
          brand: 52,
          touchFree: '1',
          safeExit: '0',
          isEVCharge: '0',
        },
      ];

      await service.addVehicle(addVehicleDto);

      const data = fs.readFileSync(dataFilePath, 'utf8');
      const parsedData = JSON.parse(data);

      expect(parsedData).toEqual(expectedData);
    });
  });
});
