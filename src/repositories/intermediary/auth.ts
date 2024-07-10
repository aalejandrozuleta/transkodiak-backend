import { authIntermediary } from 'services/intermediary/interface/auth';
import db from '@config/mysql';
import AuthDto from '@dto/intermediary/authDto';
import { FieldPacket } from 'mysql2';

export default class AuthRepository {
  static async authenticateUser(userData: AuthDto) {
    const sql = 'CALL authIntermediary(?)';
    const values = [userData.email];
    const result = (await db.execute(sql, values)) as [
      authIntermediary[][],
      FieldPacket[],
    ];
    return result[0][0];
  }
}
