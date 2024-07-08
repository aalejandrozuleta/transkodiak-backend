export interface Payload {
  id: string;
  email: string;
  typeUser: string;
  blockUser: number;
  timeBlock: Date;
  iat?: number;
}
