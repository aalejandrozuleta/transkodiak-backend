export default class notificationActionDto {

	constructor(action: string, idNotification: number, idTransporter: number) {
		this._action = action;
		this._idNotification = idNotification;
		this._idTransporter = idTransporter;
	}

    /**
     * Getter action
     * @return {string}
     */
	public get action(): string {
		return this._action;
	}

    /**
     * Getter idNotification
     * @return {number}
     */
	public get idNotification(): number {
		return this._idNotification;
	}

    /**
     * Getter idTransporter
     * @return {number}
     */
	public get idTransporter(): number {
		return this._idTransporter;
	}

    /**
     * Setter action
     * @param {string} value
     */
	public set action(value: string) {
		this._action = value;
	}

    /**
     * Setter idNotification
     * @param {number} value
     */
	public set idNotification(value: number) {
		this._idNotification = value;
	}

    /**
     * Setter idTransporter
     * @param {number} value
     */
	public set idTransporter(value: number) {
		this._idTransporter = value;
	}
  private _action: string;
  private _idNotification: number;
  private _idTransporter: number;
}
