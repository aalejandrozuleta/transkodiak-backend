import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import ChangePasswordDto from '@dto/vehicleCompany/changePassword';

export default class ChangePasswordRepository {

  static async getPassword(user: ChangePasswordDto) {
    const sql = 'CALL UpdatePasswordVehicle(?)';
    const values = [user.idUser];
    return db.execute(sql, values);
  }

  static async changePassword(user: ChangePasswordDto) {
    const sql = 'CALL UpdatePasswordVehicle(?,?)';
    const values = [user.idUser, user.newPassword];
    return db.execute(sql, values);
  }
}

