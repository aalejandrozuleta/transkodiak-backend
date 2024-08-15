import db from '@config/mysql';
import { informationVehicleCompany } from '@interfaces/vehicleCompany/informationVehicleCompany';
import { FieldPacket } from 'mysql2';

export default class getInformation {
  static async getVehicle(idCompany: string) {
    const sql = 'CALL getVehicleCompanyInformation(?)';
    const data = [idCompany];
    return db.execute(sql, data) as Promise<
      [informationVehicleCompany[], FieldPacket[]]
    >;
  }
}
