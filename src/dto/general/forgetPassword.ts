export class forgetPasswordDto {
  private _id_user: number;
  private _email: string;
  private _password_user: string;
  private _code: string;

  constructor(id_user: number, email: string, password_user: string, code: string) {
    this._id_user = id_user;
    this._email = email;
    this._password_user = password_user;
    this._code = code;
  }

  /**
   * Getter id_user
   * @return {number}
   */
  public get id_user(): number {
    return this._id_user;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter password_user
   * @return {string}
   */
  public get password_user(): string {
    return this._password_user;
  }

  /**
   * Getter code
   * @return {string}
   */
  public get code(): string {
    return this._code;
  }

  /**
   * Setter id_user
   * @param {number} value
   */
  public set id_user(value: number) {
    this._id_user = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter password_user
   * @param {string} value
   */
  public set password_user(value: string) {
    this._password_user = value;
  }

  /**
   * Setter code
   * @param {string} value
   */
  public set code(value: string) {
    this._code = value;
  }
}
