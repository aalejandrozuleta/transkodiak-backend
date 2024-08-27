import db from '@config/mysql';
import { disableTravelDto } from '@dto/travel/disable';

export class disableRepository {
  static async disableAccount(travel: disableTravelDto) {
    const sql = 'CALL DisableStateTravel(?)';
    const values = [travel.id];
    return db.execute(sql, values);
  }
}
