import db from '@config/mysql';
import { FieldPacket, QueryResult } from 'mysql2';
export class statisticsRepository {
  static async getStaticsIntermediary(idUser: string) {
    const sql = 'CALL GetIntermediaryStatistics(?)';
    const values = [idUser];
    return db.execute(sql, values) as Promise<[QueryResult[], FieldPacket[]]>;
  }

  static async getStaticsTransporter(idUser: string) {
    const sql = 'CALL GetNotificationCountsByTransporterId(?)';
    const values = [idUser];
    return db.execute(sql, values) as Promise<[QueryResult[], FieldPacket[]]>;
  }

  static async getStaticsVehicleCompany(idUser: string) {
    const sql = 'CALL GetCompanyStatistics(?)';
    const values = [idUser];
    return db.execute(sql, values) as Promise<[QueryResult[], FieldPacket[]]>;
  }
}
