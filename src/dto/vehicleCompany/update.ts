export default class UpdateDto {
  private _name: string;
  private _phone: string;
  private _email: string;
  private _address: string;

  constructor(name: string, phone: string, email: string, address: string) {
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  get phone(): string {
    return this._phone;
  }

  get email(): string {
    return this._email;
  }

  get address(): string {
    return this._address;
  }
}
