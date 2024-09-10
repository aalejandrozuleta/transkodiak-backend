import db from '@config/mysql';
import { getInformationTransporter } from '@interfaces/transpoter/getInformation';
import { FieldPacket } from 'mysql2';

export class getInformationTransporterRepository {
  static async getInformation(idTransporter: string) {
    const sql = 'CALL GetTransporterDetailsById(?)';
    const data = [idTransporter];
    return db.execute(sql, data) as Promise<
      [getInformationTransporter[], FieldPacket[]]
    >;
  }
}
