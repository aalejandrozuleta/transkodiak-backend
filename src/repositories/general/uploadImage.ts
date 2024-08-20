import db from '@config/mysql';

export class uploadImageRepository {
  static async upload(email: string, imgUrl: string) {
    const query = 'CALL UpdateImageUrlByEmail(?, ?)';
    const values = [email, imgUrl];
    return db.query(query, values);
  }
}
