import { authGeneral } from '@services/general/utils/interface/authGeneral';
import db from '@config/mysql';
import AuthDto from '@dto/general/authDto';
import { FieldPacket } from 'mysql2';

export default class AuthRepository {
  static async authenticateUser(userData: AuthDto) {
    const sql = 'CALL authGeneral(?)';
    const values = [userData.email];
    const result = (await db.execute(sql, values)) as [authGeneral[][], FieldPacket[]];
    return result[0][0];
  }
}
