import db  from '@config/mysql';
import { FieldPacket, QueryResult } from 'mysql2';
export class getHistoryFinishRepository {
  static async getHistory(idIntermediary:number) {
    const sql = 'CALL GetTravelByIntermediary(?)';
    const values = [idIntermediary];
    return db.execute(sql, values) as Promise<[QueryResult[],FieldPacket[]]>;
  }
}