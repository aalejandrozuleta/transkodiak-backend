export interface authInterface {
  id: string;
  password: string;
  email: string;
  name: string;
  token: string;
  user_type: string;
  blockUser: number;
  timeBlock: Date;
}
