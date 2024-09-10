import db from '@config/mysql';
import { historyTravel } from '@interfaces/transpoter/historyTravel';
import { FieldPacket } from 'mysql2';

export default class historyTravelRepository {
  static async getHistory(idTransporter: number) {
    const query = 'CALL GetHistoryTravelByTransporter(?)';
    const values = [idTransporter];
    return db.query(query, values) as Promise<[historyTravel[], FieldPacket[]]>;
  }
}
