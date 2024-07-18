import { FieldPacket } from 'mysql2';
import db from '@config/mysql';
import UpdateDto from '@dto/vehicleCompany/update';

export default class repositoryUpdate{
    static async updateVehicleCompany(userData: UpdateDto) {
        const sql = 'CALL UpdateVehicleCompany(?,?,?,?,?)';
        const values = [
          userData.nit,
          userData.name,
          userData.phone,
          userData.email,
          userData.address,
        ];
        return db.execute(sql, values);
      }
}