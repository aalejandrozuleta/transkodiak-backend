import { transporterFindByIdentificationId } from '@services/transporter/interface/transporterFindByCedula';
import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import RegisterDto from '@dto/transporter/register';

export default class RegisterRepository {
  static async registerTransporter(userData: RegisterDto) {
<<<<<<< HEAD
    const sql = 'CALL InsertTransporter(?,?,?,?,?,?)';
=======
    const sql = 'CALL InsertTransporter(?,?,?,?,?,?,?)';
>>>>>>> main
    const values = [
      userData.name,
      userData.idNumber,
      userData.email,
      userData.phone,
      userData.license,
      userData.password,
<<<<<<< HEAD
=======
      userData.idVehicle,
>>>>>>> main
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
}
<<<<<<< HEAD
// borrar
=======
>>>>>>> main
