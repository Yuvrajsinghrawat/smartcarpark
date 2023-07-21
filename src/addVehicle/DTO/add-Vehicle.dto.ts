// src/vehicle/dto/add-vehicle.dto.ts
export class AddVehicleDTO {
    uuid: string;
    vehicleList: VehicleDTO[];
    customerId: string;
  }
  
  export class VehicleDTO {
    type: string;
    lpn: string;
    brand: number;
    brandText?: string;
    image?: string;
    touchFree: string;
    safeExit: string;
    isEVCharge: string;
  }
  