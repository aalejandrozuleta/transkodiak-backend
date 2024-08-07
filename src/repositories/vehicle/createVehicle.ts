import db from '@config/mysql';
import CreateVehicleDto from '@dto/vehicle/createVehicle';
import { VehicleFindByPlate } from '@services/vehicle/interface/searchByPlate';
import { FieldPacket } from 'mysql2';

export default class createVehicleRepository {
  static async createVehicle(vehicleData: CreateVehicleDto) {
    const sql = 'CALL InsertVehicle(?,?,?,?)';
    const values = [
      vehicleData.license_plate,
      vehicleData.capacity,
      vehicleData.vehicle_type,
      vehicleData.load_type,
    ];
    return db.execute(sql, values);
  }

  static async findVehicleByPlate(vehicleData: CreateVehicleDto) {
    const sql = 'CALL SearchVehicleByPlate(?)';
    const values = [vehicleData.license_plate];
    return db.execute(sql, values) as Promise<
      [VehicleFindByPlate[], FieldPacket[]]
    >;
  }
}
