import db from '@config/mysql';
import UpdateDto from '@dto/vehicleCompany/update';
import { QueryResult } from '@interfaces/vehicleCompany/queryResult';
import { FieldPacket } from 'mysql2';

export const updateVehicleCompany = async (
  userId: string,
  userData: UpdateDto,
): Promise<QueryResult> => {
  const sql = 'CALL UpdateVehicleCompany(?, ?, ?, ?, ?)';
  const values = [
    userId,
    userData.name,
    userData.phone,
    userData.email,
    userData.address,
  ];
  const [result]: [QueryResult, FieldPacket[]] = await db.execute(sql, values);
  return result;
};
