export class createNotificationDto {
  private _transporterId: number;
  private _intermediaryId: number;
  private _tripId: number;

  constructor(transporterId: number, intermediaryId: number, tripId: number) {
    this._transporterId = transporterId;
    this._intermediaryId = intermediaryId;
    this._tripId = tripId;
  }

  /**
   * Getter transporterId
   * @return {number}
   */
  public get transporterId(): number {
    return this._transporterId;
  }

  /**
   * Getter intermediaryId
   * @return {number}
   */
  public get intermediaryId(): number {
    return this._intermediaryId;
  }

  /**
   * Getter tripId
   * @return {number}
   */
  public get tripId(): number {
    return this._tripId;
  }

  /**
   * Setter transporterId
   * @param {number} value
   */
  public set transporterId(value: number) {
    this._transporterId = value;
  }

  /**
   * Setter intermediaryId
   * @param {number} value
   */
  public set intermediaryId(value: number) {
    this._intermediaryId = value;
  }

  /**
   * Setter tripId
   * @param {number} value
   */
  public set tripId(value: number) {
    this._tripId = value;
  }
}
