import { getTransporterInterface } from '@interfaces/transpoter/getTransporter';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getTransportersRepository {
  static async getTransporter() {
    const sql = 'CALL getTransporters()';
    return db.execute(sql) as Promise<
      [getTransporterInterface[], FieldPacket[]]
    >;
  }
}
