import { getTransporterInterface } from '@interfaces/transpoter/getTransporter';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getTransportersRepository {
<<<<<<< HEAD
  static async getTransporter() {
    const sql = 'CALL getTransporters()';
    return db.execute(sql) as Promise<
=======
  static async getTransporter(idCompany:string) {
    const sql = 'CALL getTransporters(?)';
    const data = [idCompany];
    return db.execute(sql,data) as Promise<
>>>>>>> main
      [getTransporterInterface[], FieldPacket[]]
    >;
  }
}
