import { transporterFindByIdentificationId } from '@services/transporter/interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import RegisterDto from '@dto/transporter/register';

export default class RegisterRepository {
  static async registerTransporter(userData: RegisterDto) {
    const sql = 'CALL InsertTransporter(?,?,?,?,?,?)';
    const values = [
      userData.name,
      userData.idNumber,
      userData.email,
      userData.phone,
      userData.license,
      userData.password,
    ];
    return db.execute(sql, values);
  }

  static async findTransporterByDocument(userData: RegisterDto) {
    const sql = 'CALL SearchTransporterByCedula(?)';
    const values = [userData.idNumber];
    return db.execute(sql, values) as Promise<
      [transporterFindByIdentificationId[], FieldPacket[]]
    >;
  }
}
