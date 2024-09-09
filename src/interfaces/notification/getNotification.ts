export interface getNotification {
  trip_id: number;
  transporter_name: string;
  imgUserTransporter: string;
  origin: string;
  destination: string;
  description: string | null;
  transporter_id: number;
  notification_id:number;
}
