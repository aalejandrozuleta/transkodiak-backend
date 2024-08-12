import { createVehicle } from '@interfaces/vehicle/createVehicle';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getVehicleRepository {
  static async getVehicle() {
    const sql = 'CALL getVehicles()';
    return db.execute(sql) as Promise<
      [createVehicle[], FieldPacket[]]
    >;
  }
}
