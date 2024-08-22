export default class CreateTravelDto {
  private _weight: number;
  private _origin: string;
  private _destination: string;
  private _payment: number;
  private _description: string;
  private _departureDate: Date;
  private _deliverDate: Date;
  private _idIntermediary: string;
  private _idTransporter?: string;

  constructor(
    weight: number,
    origin: string,
    destination: string,
    payment: number,
    description: string,
    departureDate: Date,
    deliverDate: Date,
    idIntermediary: string,
    idTransporter?: string, // Cambiado aquí
  ) {
    this._weight = weight;
    this._origin = origin;
    this._destination = destination;
    this._payment = payment;
    this._description = description;
    this._departureDate = departureDate;
    this._deliverDate = deliverDate;
    this._idIntermediary = idIntermediary;
    this._idTransporter = idTransporter;
  }

  public get weight(): number {
    return this._weight;
  }

  public set weight(value: number) {
    this._weight = value;
  }

  public get origin(): string {
    return this._origin;
  }

  public set origin(value: string) {
    this._origin = value;
  }

  public get destination(): string {
    return this._destination;
  }

  public set destination(value: string) {
    this._destination = value;
  }

  public get payment(): number {
    return this._payment;
  }

  public set payment(value: number) {
    this._payment = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get departureDate(): Date {
    return this._departureDate;
  }

  public set departureDate(value: Date) {
    this._departureDate = value;
  }

  public get deliverDate(): Date {
    return this._deliverDate;
  }

  public set deliverDate(value: Date) {
    this._deliverDate = value;
  }

  public get idIntermediary(): string {
    return this._idIntermediary;
  }

  public set idIntermediary(value: string) {
    this._idIntermediary = value;
  }

  public get idTransporter(): string | undefined {
    return this._idTransporter;
  }

  public set idTransporter(value: string | undefined) {
    this._idTransporter = value;
  }
}
