const userDBTable = `
DROP TABLE IF EXISTS userDB CASCADE;
CREATE TABLE userdb(
    id SERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdDate VARCHAR(255) NOT NULL,
    modifiedDate VARCHAR(255) NOT NULL
  );`;

const dataDBTable = `
DROP TABLE IF EXISTS dataDB CASCADE;
CREATE TABLE datadb(
  Id INT NOT NULL,
  userId INT NOT NULL,
  createdBy VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  longitude VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  images VARCHAR(255) NOT NULL,
  videos VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  createdOn VARCHAR(255) NOT NULL,
  modifiedOn VARCHAR(255) NOT NULL
  );`;

export default { userDBTable, dataDBTable };
