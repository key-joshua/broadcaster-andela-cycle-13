import pool from '../../config/connectionDatabase';

const dropTables = 'DROP TABLE IF EXISTS challenge.userDB, challenge.dataDB';

const queryString = `${dropTables}`;
pool.query(queryString)
  .then(() => console.log('Hy Joshua You are Successfully droped Table'))
  .catch((error) => console.log(error));
