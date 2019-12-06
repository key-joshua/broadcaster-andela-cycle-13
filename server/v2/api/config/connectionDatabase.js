import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const databaseURL = 'postgresql://postgres:key07202020@localhost:5432/broadcaster';
const DATABASE_URL = 'postgres://bsmgmkpwgsciee:2b077e0b4dcc540d9f8b8cc13c9d2d1fb18972d1804f4b3cc82746e8c24bd620@ec2-54-235-86-101.compute-1.amazonaws.com:5432/d2sfnoqpc5oki5';
const pool = new pg.Pool({
  connectionString: databaseURL,
});


export default pool;
