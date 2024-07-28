export default class UpdateDto {
  private _nit: string;
  private _name?: string;
  private _phone?: string;
  private _email?: string;
  private _address?: string;

  constructor(
    nit: string,
    name?: string,
    phone?: string,
    email?: string,
    address?: string,
  ) {
    this._nit = nit;
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._address = address;
  }

  public get nit(): string {
    return this._nit;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public get phone(): string | undefined {
    return this._phone;
  }

  public get email(): string | undefined {
    return this._email;
  }

  public get address(): string | undefined {
    return this._address;
  }

  public set name(value: string | undefined) {
    this._name = value;
  }

  public set phone(value: string | undefined) {
    this._phone = value;
  }

  public set email(value: string | undefined) {
    this._email = value;
  }

  public set address(value: string | undefined) {
    this._address = value;
  }
}
