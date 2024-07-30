export default class registerDto {
  private _name: string;
  private _email: string;
  private _phone: string;
  private _address: string;
  private _password: string;

  constructor(name: string, email: string, phone: string, address: string, password: string) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._address = address;
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
   * Getter phone
   * @return {string}
   */
  public get phone(): string {
    return this._phone;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
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
   * Setter phone
   * @param {string} value
   */
  public set phone(value: string) {
    this._phone = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }
}
