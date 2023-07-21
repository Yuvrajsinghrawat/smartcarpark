// entities/vehicle.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  type: string;

  @Column()
  lpn: string;

  @Column()
  brand: number;

  @Column({ nullable: true })
  brandText?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  touchFree: string;

  @Column()
  safeExit: string;

  @Column()
  isEVCharge: string;

  @Column()
  customerId: string;
}
