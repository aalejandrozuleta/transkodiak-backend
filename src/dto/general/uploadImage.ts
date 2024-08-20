export default class uploadImageDto {
  private _email: string;
  private _img: Express.Multer.File;
  constructor(email: string, img: Express.Multer.File) {
    this._email = email;
    this._img = img;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter img
   * @return {Express.Multer.File}
   */
  public get img(): Express.Multer.File {
    return this._img;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter img
   * @param {Express.Multer.File} value
   */
  public set img(value: Express.Multer.File) {
    this._img = value;
  }
}
