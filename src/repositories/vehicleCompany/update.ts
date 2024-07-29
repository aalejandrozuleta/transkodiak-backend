// repositories/vehicleCompany/update.ts
import db from '@config/mysql';
import UpdateDto from '@dto/vehicleCompany/update';
import { QueryResult } from '@interfaces/vehicleCompany/queryResult';

export const updateVehicleCompany = async (userId: string, userData: UpdateDto): Promise<QueryResult> => {
  const sql = 'CALL UpdateVehicleCompany(?, ?, ?, ?, ?)';
  const values = [
    userId,
    userData.name,
    userData.phone,
    userData.email,
    userData.address,
  ];
  const [result]: [QueryResult, any] = await db.execute(sql, values);
  return result;
};
