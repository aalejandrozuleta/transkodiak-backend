export class changePasswordDto {
  private _id: number;
  private _userType: string;
  private _newPassword: string;

  constructor(id: number, userType: string, newPassword: string) {
    this._id = id;
    this._userType = userType;
    this._newPassword = newPassword;
  }

  public get id(): number {
    return this._id;
  }

  public get userType(): string {
    return this._userType;
  }

  public get newPassword(): string {
    return this._newPassword;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set userType(value: string) {
    this._userType = value;
  }

  public set newPassword(value: string) {
    this._newPassword = value;
  }
}
