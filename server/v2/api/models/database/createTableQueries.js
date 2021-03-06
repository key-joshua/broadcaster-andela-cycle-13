import pool from '../../config/connectionDatabase';
import createTableQueries from './createTableQuerie';
import dataTable from './insertDataQueries';
import userTable from './insertUsersQueries';

const allQueries = async () => {
  await pool.query(createTableQueries.userDBTable);
  await pool.query(createTableQueries.dataDBTable);
  await pool.query(userTable.user);
  await pool.query(userTable.user1);
  await pool.query(dataTable.data);
  await pool.query(dataTable.data1);
  await pool.query(dataTable.data2);
  await pool.query(dataTable.data3);
  await pool.query(dataTable.data4);
  console.log('Hy Joshua You are Successfully Crated Table');
};

(async () => {
  await pool.query(allQueries);
})().catch();
export default allQueries;
