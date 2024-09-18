import db from '@config/mysql';
export class finishTravelRepository {
  static async finishTravel(idTravel: string) {
    const sql = 'CALL SetTransporterActive(?)';
    const values = [idTravel];
    return db.execute(sql, values);
  }
}
