export default class UpdateDto {
  private readonly _nit: string; 
  private _name: string;
  private _phone: string;
  private _email: string;
  private _address: string;

  constructor(
    nit: string,
    name: string,
    phone: string,
    email: string,
    address: string,
  ) {
    this._nit = nit;
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._address = address;
  }

  // Getters
  public get nit(): string {
    return this._nit;
  }

  public get name(): string {
    return this._name;
  }

  public get phone(): string {
    return this._phone;
  }

  public get email(): string {
    return this._email;
  }

  public get address(): string {
    return this._address;
  }

  // Setters
  public set name(value: string) {
    this._name = value;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public set email(value: string) {
    this._email = value;
  }

  public set address(value: string) {
    this._address = value;
  }
}
