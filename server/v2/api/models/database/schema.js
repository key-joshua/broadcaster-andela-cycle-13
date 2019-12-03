import pool from '../../config/connect_db';

const takeSchemaQuery = 'CREATE schema challenge;';

const queryString = ` ${takeSchemaQuery} `;
pool.query(queryString)
  .then(() => console.log(`Hy Joshua You are ${queryString}`))
  .catch((error) => console.log(error));
