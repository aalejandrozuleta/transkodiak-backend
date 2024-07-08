import { authCompany } from 'services/vehicleCompany/interface/authCompany';
import db from '@config/mysql';
import AuthDto from '@dto/vehicleCompany/auth';
import { FieldPacket } from 'mysql2';

export default class AuthRepository {
  static async authenticateUser(userData: AuthDto) {
    const sql = 'CALL AuthVehicleCompany(?)';
    const values = [userData.email];
    const result = (await db.execute(sql, values)) as [
      authCompany[][],
      FieldPacket[],
    ];
    return result[0][0];
  }
}
