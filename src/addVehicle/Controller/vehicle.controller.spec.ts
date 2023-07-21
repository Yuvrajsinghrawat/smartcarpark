// src/vehicle/vehicle.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from '../Service/vehicle.service';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [VehicleService],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call addVehicle in service with correct data', async () => {
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

    jest.spyOn(service, 'addVehicle').mockResolvedValueOnce([]);

    await controller.addVehicle(addVehicleDto);

    expect(service.addVehicle).toHaveBeenCalledWith(addVehicleDto);
  });
});
