import { codeForget } from '@services/general/utils/interface/codeForget';
import db from '@config/mysql';
import getCodeDto from '@dto/general/codeForgetPassword';
import { FieldPacket } from 'mysql2';

export default class getCodeForgetRepository {
  static async searchUserCode(user: getCodeDto) {
    const query = 'CALL searchUserCode(?,?)';
    const values = [user.email, user.phone];
    return db.query(query, values) as Promise<[codeForget[][], FieldPacket[]]>;
  }
}
