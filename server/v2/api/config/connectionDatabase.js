import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool = {};
pool = new Pool({
  connectionString: 'postgresql://postgres:key07202020@localhost:5432/broadcaster',
});
pool.on('connect', () => {
  console.log('connected to the development db');
});
if (process.env.NODE_ENV === 'testing') {
  pool = new Pool({
    connectionString: 'postgresql://postgres:key07202020@localhost:5432/broadcaster',
  });
  pool.on('connect', () => {
    console.log('connected to the tests db');
  });
}
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: 'postgresql://postgres:key07202020@localhost:5432/broadcaster',
  });
  pool.on('connect', () => {
    console.log('connected to the production db');
  });
}
export default pool;
