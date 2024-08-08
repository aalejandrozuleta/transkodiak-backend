export default class CreateVehicleDto {
  private _license_plate: string;
  private _capacity: string;
  private _vehicle_type: string;
  private _load_type: string;
  private _model:string;
  private _brand:string;

  constructor(
    license_plate: string,
    capacity: string,
    vehicle_type: string,
    load_type: string,
    model: string,
    brand: string,
  ) {
    this._license_plate = license_plate;
    this._capacity = capacity;
    this._vehicle_type = vehicle_type;
    this._load_type = load_type;
    this._model = model;
    this._brand = brand;
  }

  // Getters
  get license_plate(): string {
    return this._license_plate;
  }

  get capacity(): string {
    return this._capacity;
  }

  get vehicle_type(): string {
    return this._vehicle_type;
  }

  get load_type(): string {
    return this._load_type;
  }

  get model(): string {
    return this._model;
  }

  get brand(): string {
    return this._brand;
  }

  // Setters
  set license_plate(value: string) {
    this._license_plate = value;
  }

  set capacity(value: string) {
    this._capacity = value;
  }

  set vehicle_type(value: string) {
    this._vehicle_type = value;
  }

  set load_type(value: string) {
    this._load_type = value;
  }

  set model(value: string) {
    this._model = value;
  }

  set brand(value: string) {
    this._brand = value;
  }
}
