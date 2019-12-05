import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const databaseURL = 'postgresql://postgres:key07202020@localhost:5432/broadcaster';
let pool;
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
} else {
  pool = new pg.Pool({
    connectionString: databaseURL,
  });
}

export default pool;
