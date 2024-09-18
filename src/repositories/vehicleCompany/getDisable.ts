import db from '@config/mysql';
import { getDisableInterface } from '@interfaces/vehicleCompany/getDisable';
import { FieldPacket } from 'mysql2';
export class getDisableRepository {
  static async getDisable(id: string) {
    const sql = 'call GetDisabledTransportersByNit(?)';
    const values = [id];
    return db.execute(sql, values) as Promise<
      [getDisableInterface[], FieldPacket[]]
    >;
  }
}
