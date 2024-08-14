import { createVehicle } from '@interfaces/vehicle/createVehicle';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getVehicleRepository {
  static async getVehicle(idCompany: string) {
    const sql = 'CALL getVehicles(?)';
    const data = [idCompany];
    return db.execute(sql, data) as Promise<[createVehicle[], FieldPacket[]]>;
  }
}
