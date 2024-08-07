export default class CreateVehicleDto {
  private _license_plate: string;
  private _capacity: number;
  private _vehicle_type: string;
  private _load_type: string;

  constructor(
    license_plate: string,
    capacity: number,
    vehicle_type: string,
    load_type: string,
  ) {
    this._license_plate = license_plate;
    this._capacity = capacity;
    this._vehicle_type = vehicle_type;
    this._load_type = load_type;
  }

  // Getters
  get license_plate(): string {
    return this._license_plate;
  }

  get capacity(): number {
    return this._capacity;
  }

  get vehicle_type(): string {
    return this._vehicle_type;
  }

  get load_type(): string {
    return this._load_type;
  }

  // Setters
  set license_plate(value: string) {
    this._license_plate = value;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  set vehicle_type(value: string) {
    this._vehicle_type = value;
  }

  set load_type(value: string) {
    this._load_type = value;
  }
}
