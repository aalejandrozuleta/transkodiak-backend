import { statusTransporter } from '@services/notification/interface/statusTransporter';
import { createNotificationDto } from '@dto/notification/createNotification';
import db from '@config/mysql';
import { FieldPacket, QueryResult } from 'mysql2';

export default class notificationRepository {
  // Método para obtener el estado del transportista
  static async GetTransporterStatus(notification: createNotificationDto) {
    const sql = 'CALL GetTransporterStatus(?)';
    const values = [notification.transporterId];
    return  db.execute(sql, values) as Promise<
      [statusTransporter[][], FieldPacket[]]
    >;

  }

  // Método para crear la notificación
  static async createNotification(notification: createNotificationDto) {
    const sql = 'CALL CreateNotification(?, ?, ?)';
    const values = [
      notification.transporterId,
      notification.intermediaryId,
      notification.tripId,
    ];
    return db.execute(sql, values);
  }

  // Método para deshabilitar el transportista
  static async disableTransporter(notification: createNotificationDto) {
    const sql = 'CALL SetTransporterInactive(?)';
    const values = [notification.transporterId];
    return db.execute(sql, values);
  }
}
