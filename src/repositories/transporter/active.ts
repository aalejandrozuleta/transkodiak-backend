import  db  from '@config/mysql';
export class activeRepository {
  static async activeTransporter(idTransporter:string) {
    const sql = 'CALL activeTransporter(?)';
    const values = [idTransporter];
    return db.execute(sql, values);
  }
}