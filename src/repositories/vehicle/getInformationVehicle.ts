import db  from '@config/mysql';
import { getInformationVehicle } from '@interfaces/vehicle/getInformationVehicle';
import { FieldPacket } from 'mysql2';
export class getInformationVehicleRepository {
  static async getInformationVehicle(vehicleId: string) {
    const sql = 'CALL GetVehicleDetailsByLicensePlate(?)';
    const data = [vehicleId];
    return db.execute(sql, data) as Promise<
    [getInformationVehicle[], FieldPacket[]]
  >;
  }
}