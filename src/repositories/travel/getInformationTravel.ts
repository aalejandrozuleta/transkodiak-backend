import db from '@config/mysql';
import { getInformationTravel } from '@interfaces/transpoter/getInformationTravel';
import { FieldPacket } from 'mysql2';

export class getInformationTravelRepository {
  static async getInformation(idTravel: string) {
    const sql = 'CALL GetTravelDetailsByTripId(?)';
    const data = [idTravel];
    return db.execute(sql, data) as Promise<
      [getInformationTravel[], FieldPacket[]]
    >;
  }
}
