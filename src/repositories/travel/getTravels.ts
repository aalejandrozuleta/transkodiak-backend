import { createTravelInterface } from '@interfaces/Travel/createTravel';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getTravelRepository {
  static async getTravel(idIntermediary: string) {
    const sql = 'CALL getTravels(?)';
    const data = [idIntermediary];
    return db.execute(sql, data) as Promise<
      [createTravelInterface[], FieldPacket[]]
    >;
  }
}
