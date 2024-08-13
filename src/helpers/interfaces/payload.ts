export interface Payload {
  id: string;
  email: string;
  name: string;
  typeUser: string;
  blockUser: number;
  timeBlock: Date;
  iat?: number;
}
