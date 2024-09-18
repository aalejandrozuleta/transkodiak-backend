import { HistoryRepository } from '@repositories/intermediary/getHistory';
import { FieldPacket, QueryResult } from 'mysql2';

export const getHistoryService = async (id: number) => {
  const [result]: [QueryResult[], FieldPacket[]] =
    await HistoryRepository.getHistory(id).catch((error) => {
      console.error(error);
      throw new Error('Error en la base de datos');
    });

  return result[0];
};
