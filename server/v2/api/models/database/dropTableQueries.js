import pool from '../../config/connectionDatabase';

const dropTables = 'DROP TABLE IF EXISTS userdb, datadb';

const queryString = `${dropTables}`;
pool.query(queryString)
  .then(() => console.log('Hy Joshua You are Successfully droped Table'))
  .catch();
