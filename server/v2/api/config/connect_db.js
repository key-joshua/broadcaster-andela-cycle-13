import pg from 'pg';

const client = {
  user: 'postgres',
  password: 'key07202020',
  host: 'localhost',
  port: 5432,
  database: 'broadcaster',
};
const pool = new pg.Pool(client);
pool.connect();

export default pool;
