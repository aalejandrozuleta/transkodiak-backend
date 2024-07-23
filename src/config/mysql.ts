import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  namedPlaceholders: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000 
});

export default pool;
