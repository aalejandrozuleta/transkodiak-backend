import db from '@config/mysql';
import { forgetPasswordDto } from '@dto/general/forgetPassword';

export class forgetPasswordRepository {
  static async forgetPassword(user: forgetPasswordDto) {
    const query = 'CALL forgetPassword(?, ?)';
    const values = [user.id_user, user.password_user];
    return db.query(query, values);
  }
}
