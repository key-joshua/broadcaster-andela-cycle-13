import pool from '../../config/connect_db';

const dropTables = 'DROP TABLE IF EXISTS challenge.userDB, challenge.dataDB';

const queryString = `${dropTables}`;
pool.query(queryString)
  .then(() => console.log(`Hy Joshua You are Successfully " ${queryString} "`))
  .catch((error) => console.log(error));
