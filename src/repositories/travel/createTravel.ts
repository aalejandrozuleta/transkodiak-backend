import db from '@config/mysql';
import CreateTravelDto from '@dto/travel/createTravel';
import { FieldPacket } from 'mysql2';

export default class createTravelRepository {
    static async createTravel(travelData: CreateTravelDto){
        const sql = 'CALL InsertTravel(?,?,?,?,?,?,?,?,?)';
        const values = [
            travelData.weight,
            travelData.origin,
            travelData.destination,
            travelData.payment,
            travelData.description,
            travelData.departureDate,
            travelData.deliverDate,
            travelData.idIntermediary,
            travelData.idTransporter
        ];
        const result = (await db.execute(sql, values)) as [
            [number, string, string, number, string, Date, Date, string, string],
            FieldPacket[]
        ];
        return result;
    }
}