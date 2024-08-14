import { transporterFindByIdentificationId } from '@services/transporter/interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import RegisterDto from '@dto/transporter/register';
import { searchEmail } from '@interfaces/general/searchEmail';

export default class RegisterRepository {
  static async registerTransporter(userData: RegisterDto) {
    const sql = 'CALL InsertTransporter(?,?,?,?,?,?,?)';
    const values = [
      userData.name,
      userData.idNumber,
      userData.email,
      userData.phone,
      userData.license,
      userData.password,
      userData.idCompany,
    ];
    return db.execute(sql, values);
  }
  static async findTransporterByDocument(userData: RegisterDto) {
    const sql = 'CALL SearchTransporterByIdentificationCard(?)';
    const values = [userData.idNumber];
    return db.execute(sql, values) as Promise<
      [transporterFindByIdentificationId[], FieldPacket[]]
    >;
  }

  static async searchEmail(userData: RegisterDto) {
    const sql = 'CALL SearchEmail(?)';
    const values = [userData.email];
    return db.execute(sql, values) as Promise<[searchEmail[], FieldPacket[]]>;
  }
}
