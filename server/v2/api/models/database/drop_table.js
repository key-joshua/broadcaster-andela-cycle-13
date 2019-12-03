import pool from '../../config/connect_db';

const userDB = 'DROP TABLE IF EXISTS challenge.userDB';
const dataDB = 'DROP TABLE IF EXISTS challenge.dataDB';
const queryString = `${dataDB}`;
pool.query(queryString)
  .then(() => console.log(`Hy Joshua You are Successfully " ${queryString} "`))
  .catch((error) => console.log(error));
