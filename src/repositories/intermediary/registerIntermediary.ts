import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import RegisterDto from '@dto/intermediary/registerDto';
import { intermediaryFindByName } from 'services/intermediary/interface/intermediaryFindByName';

export default class RegisterRepository {
  static async registerIntermediary(userData: RegisterDto) {
    console.log(userData);

    const sql = 'CALL InsertIntermediary(?,?,?,?,?)';
    const values = [
      userData.name,
      userData.email,
      userData.phone,
      userData.address,
      userData.password,
    ];
    return db.execute(sql, values);
  }

  static async findIntermediaryByName(userData: RegisterDto) {
    const sql = 'CALL SearchIntermediaryByName(?)';
    const values = [userData.name];
    return db.execute(sql, values) as Promise<
      [intermediaryFindByName[], FieldPacket[]]
    >;
  }
}
