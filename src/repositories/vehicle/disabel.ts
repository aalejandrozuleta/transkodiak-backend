import db from '@config/mysql';
import { disableVehicleDto } from '@dto/vehicle/disable';

export class disableRepository {
  static async disableAccount(vehicle: disableVehicleDto) {
    const sql = 'CALL DisableStateVehicle(?)';
    const values = [vehicle.id];
    return db.execute(sql, values);
  }
}
