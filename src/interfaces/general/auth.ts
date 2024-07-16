export interface authInterface {
  id: string;
  password: string;
  email: string;
  token: string;
  user_type: string;
  blockUser: number;
  timeBlock: Date;
}
