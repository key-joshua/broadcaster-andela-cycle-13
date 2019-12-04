import pool from '../../config/connect_db';
import createSchemaQueries from './createSchemaQueries';
import createTableQueries from './CreateTable';
import dataTable from './insertDataQueries';
import userTable from './insertUsersQueries';

const allQueries = async () => {
  await pool.query(createSchemaQueries.dropeChallenge);
  await pool.query(createSchemaQueries.chemaChallenge);
  await pool.query(createTableQueries.userDBTable);
  await pool.query(createTableQueries.dataDBTable);
  await pool.query(userTable.user);
  await pool.query(userTable.user1);
  await pool.query(dataTable.data);
  await pool.query(dataTable.data1);
  await pool.query(dataTable.data2);
  await pool.query(dataTable.data3);
  await pool.query(dataTable.data4);
  console.log('Hy Joshua You are Successfully runned queries');
};

(async () => {
  await pool.query(allQueries);
})().catch((error) => console.log(error.message));
export default allQueries;
