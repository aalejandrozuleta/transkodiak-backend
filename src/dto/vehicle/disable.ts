export class disableVehicleDto {
  private _id: string;

  constructor(id: string) {
    this._id = id;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }
}
