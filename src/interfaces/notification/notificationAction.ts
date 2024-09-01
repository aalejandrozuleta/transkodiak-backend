export interface notificationAction {
  action: 'denegad' | 'accepted';
  idNotification: number;
  idTransporter: number;
}