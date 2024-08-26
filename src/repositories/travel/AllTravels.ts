import { createTravelInterface } from '@interfaces/Travel/createTravel';
import db from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class allTravelRepository {
  static async allTravel() {
    const sql = 'CALL GetAllTravels()';
    return db.execute(sql) as Promise<[createTravelInterface[], FieldPacket[]]>;
  }
}
