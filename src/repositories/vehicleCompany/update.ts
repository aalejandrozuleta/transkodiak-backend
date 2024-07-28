import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import UpdateDto from '@dto/vehicleCompany/update';

export default class UpdateRepository {
  static async updateVehicleCompany(userData: UpdateDto) {
    const sql = 'CALL UpdateVehicleCompany(?, ?, ?, ?, ?)';
    const values = [
      userData.nit,
      userData.name || null,
      userData.phone || null,
      userData.email || null,
      userData.address || null
    ];
    return db.execute(sql, values);
  }

  static async findVehicleCompanyByNit(nit: string) {
    const sql = 'SELECT * FROM vehicle_company WHERE nit = ?';
    const values = [nit];
    return db.execute(sql, values) as Promise<[any[], FieldPacket[]]>;
  }
}
