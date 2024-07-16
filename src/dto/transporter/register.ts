export default class RegisterDto {
  private _name: string;
  private _idNumber: string;
  private _email: string;
  private _phone: string;
  private _license: string;
  private _password: string;

  constructor(
    name: string,
    idNumber: string,
    email: string,
    phone: string,
    license: string,
    password: string, 
  ) {
    this._name = name;
    this._idNumber = idNumber;
    this._email = email;
    this._phone = phone;
    this._license = license;
    this._password = password;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter idNumber
   * @return {string}
   */
  public get idNumber(): string {
    return this._idNumber;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter phone
   * @return {string}
   */
  public get phone(): string {
    return this._phone;
  }

  /**
   * Getter license
   * @return {string}
   */
  public get license(): string {
    return this._license;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter idNumber
   * @param {string} value
   */
  public set idNumber(value: string) {
    this._idNumber = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter phone
   * @param {string} value
   */
  public set phone(value: string) {
    this._phone = value;
  }

  /**
   * Setter license
   * @param {string} value
   */
  public set license(value: string) {
    this._license = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }
}
// borrar