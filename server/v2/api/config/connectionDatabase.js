import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const databaseURL = 'postgresql://postgres:key07202020@localhost:5432/broadcaster';
const pool = new pg.Pool({
  connectionString: databaseURL,
});

export default pool;
