import { getNotification } from '@interfaces/notification/getNotification';
import db  from '@config/mysql';
import { FieldPacket } from 'mysql2';

export class getNotificationRepository {
  static async getNotification(date: number) {
    const sql = 'CALL GetNotifications(?)';
    const data = [date];
    return db.execute(sql, data) as Promise<[getNotification[],FieldPacket[]]>;
  }
}