import  db  from '@config/mysql';
import notificationActionDto from '@dto/notification/notificationAction';

export class notificationActionRepository {

  //accepted
  static async inProgressTransporter(notificationAction: notificationActionDto) {
    const query = 'CALL SetTransporterInProgress(?)';
    const values = [ notificationAction.idTransporter];
    return db.query(query, values);
  }

  static async accepted(notificationAction: notificationActionDto) {
    const query = 'CALL SetNotificationAccepted(?)';
    const values = [notificationAction.idNotification];
    return db.query(query, values);
  }

  // rejected

  static async activeTransporter(notificationAction: notificationActionDto) {
    const query = 'CALL SetTransporterInDenegad(?)';
    const values = [notificationAction.idTransporter];
    return db.query(query, values);
  }

  static async rejected(notificationAction: notificationActionDto) {
    const query = 'CALL SetNotificationRejected(?)';
    const values = [notificationAction.idNotification];
    return db.query(query, values);
  }

}