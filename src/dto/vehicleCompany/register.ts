export default class RegisterDto {
  private _nit: string;
  private _name: string;
  private _phone: string;
  private _email: string;
  private _address: string;
  private _password: string;

  constructor(
    nit: string,
    name: string,
    phone: string,
    email: string,
    address: string,
    password: string,
  ) {
    this._nit = nit;
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._address = address;
    this._password = password;
  }

  /**
   * Getter nit
   * @return {string}
   */
  public get nit(): string {
    return this._nit;
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
   * Setter nit
   * @param {string} value
   */
  public set nit(value: string) {
    this._nit = value;
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
