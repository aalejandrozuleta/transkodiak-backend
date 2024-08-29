import db from '@config/mysql';
import { informationIntermediary } from '@interfaces/intermediary/information';
import { FieldPacket } from 'mysql2';

export default class getInformation {
  static async getInformationIntermediary(idIntermediary: string) {
    const sql = 'CALL getIntermediaryInformation(?)';
    const data = [idIntermediary];
    return db.execute(sql, data) as Promise<
      [informationIntermediary[], FieldPacket[]]
    >;
  }
}
