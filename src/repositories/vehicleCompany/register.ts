import { vehicleCompanyFindByNameInterface } from '@services/vehicleCompany/interface/vehicleCompanyFindByName';
import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import RegisterDto from '@dto/vehicleCompany/register';
import { searchEmail } from '@interfaces/general/searchEmail';

export default class RegisterRepository {
  static async registerVehicleCompany(userData: RegisterDto) {
    const sql = 'CALL InsertVehicleCompany(?,?,?,?,?,?)';
    const values = [
      userData.nit,
      userData.name,
      userData.phone,
      userData.email,
      userData.address,
      userData.password,
    ];
    return db.execute(sql, values);
  }

  static async findVehicleCompanyByName(userData: RegisterDto) {
    const sql = 'CALL searchCompanyByName(?)';
    const values = [userData.name];
    return db.execute(sql, values) as Promise<
      [vehicleCompanyFindByNameInterface[], FieldPacket[]]
    >;
  }

  static async searchEmail(userData: RegisterDto) {
    const sql = 'CALL SearchEmail(?)';
    const values = [userData.email];
    return db.execute(sql, values) as Promise<[searchEmail[], FieldPacket[]]>;
  }
}
