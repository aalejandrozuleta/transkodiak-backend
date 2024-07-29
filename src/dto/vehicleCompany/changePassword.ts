export default class ChangePasswordDto {
  private _idUser: string;
  private currentPassword: string;
  private _newPassword: string;

  constructor(idUser: string, _currentPassword: string, newPassword: string) {
    this._idUser = idUser;
    this.currentPassword = _currentPassword;
    this._newPassword = newPassword;
  }

  /**
   * Getter idUser
   * @return {string}
   */
  public get idUser(): string {
    return this._idUser;
  }

  /**
   * Getter _currentPassword
   * @return {string}
   */
  public get _currentPassword(): string {
    return this.currentPassword;
  }

  /**
   * Getter newPassword
   * @return {string}
   */
  public get newPassword(): string {
    return this._newPassword;
  }

  /**
   * Setter idUser
   * @param {string} value
   */
  public set idUser(value: string) {
    this._idUser = value;
  }

  /**
   * Setter _currentPassword
   * @param {string} value
   */
  public set _currentPassword(value: string) {
    this.currentPassword = value;
  }

  /**
   * Setter newPassword
   * @param {string} value
   */
  public set newPassword(value: string) {
    this._newPassword = value;
  }
}