import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import { disableDto } from '@dto/transporter/disable';

export class disableRepository {
  static async disableAccount(user: disableDto) {
    const sql = 'CALL DisableStateTransporter(?)';
    const values = [user.id];
    return db.execute(sql, values);
  }
}
