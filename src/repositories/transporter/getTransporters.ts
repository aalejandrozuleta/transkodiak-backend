import { FieldPacket } from 'mysql2';
import db from '@config/mysql';

export const getAllTransporters = async () => {
    const query = 'CALL GetTransporterDetails()';
    const [rows] = await db.query(query);
    return rows; 
};
