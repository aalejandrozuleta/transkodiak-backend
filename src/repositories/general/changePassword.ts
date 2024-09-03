import db from '@config/mysql';
import { changePasswordDto } from '@dto/general/changePassword';

export class changePasswordRepository {
  static async changePassword(user: changePasswordDto) {
    const query = 'CALL changePassword(?, ?, ?)';
    const values = [user.id, user.newPassword, user.userType];
    return db.query(query, values);
  }
}
