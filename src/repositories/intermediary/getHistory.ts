import db from '@config/mysql';
import { FieldPacket, QueryResult } from 'mysql2';
export class HistoryRepository {
  static async getHistory(userId: number) {
    const sql = 'call getAcceptedTripsByIntermediary(?)';
    const values = [userId];
    return db.query(sql, values) as Promise<[QueryResult[], FieldPacket[]]>;
  }
}
