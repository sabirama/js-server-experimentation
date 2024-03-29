import mysql from "mysql";
import { dbConfig } from "../../../Variables.js";

const db = mysql.createConnection({
  host: dbConfig.dbHost,
  port: dbConfig.dbPort,
  user: dbConfig.dbUser,
  password: dbConfig.dbPassword,
  database: dbConfig.dbDatabase,
});

// Connect to the database
const connect = db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + db.threadId);
});

export const createTable = (tableName, columnDefinitions, callback) => {
  /**
  tablename(string);
  columnDefinition(array with objects) sample: [
    {name: "column_name1", datatype: "column_type", constraints: "column_constraints"},
    {name: "column_name2", datatype: "column_type", constraints: "column_constraints"},
  ];
  callback(function);
 */

  connect;

  const columns = [
    {
      name: "id",
      datatype: "BIGINT",
      constraints: "AUTO_INCREMENT PRIMARY KEY",
    },
  ];

  columnDefinitions.forEach((element) => {
    columns.push(element);
  });

  const columnsString = columns
    .map((col) => `${col.name} ${col.datatype} ${col.constraints}`)
    .join(",");

  const queryString = `CREATE TABLE ${tableName} (${columnsString})`;
  db.query(queryString, (error, results, fields) => {
    if (error) {
      console.error("Error creating table: " + error);
      callback(error, null, null);
      return;
    }
    console.log("Table created successfully.");
    callback(null, results, fields);
  });
};

export const dbSelectTable = (tableName, callback) => {
  /**
  tablename(string);
  callback(function);
 */
  connect;

  db.query(`SELECT * FROM ${tableName}`, (error, results, fields) => {
    if (error) {
      console.error("Error selecting from table: " + error);
      callback(error, null, null);
      return;
    }
    callback(null, results, fields);
  });
  db.end();
};

export const dbInsert = (tableName, keys, values, callback) => {
  /**
  tablename(string);
  keys(string) sample: (key1, key2, key3);
  values(string) sample (value1, value2, value3);
  callback(function);
 */
  connect;

  db.query(
    `INSERT INTO ${tableName} ${keys} VALUES ${values} `,
    (error, results, fields) => {
      if (error) {
        console.error("Error inserting into table: " + error);
        callback(error, null, null);
        return;
      }
      console.log("Inserted row successfully.");
      callback(null, results, fields);
    }
  );
  db.end();
};

export const dbDeleteTable = (tableName, callback) => {
  /*
  tablename(string);
  callback(function);
  */
  connect;
  db.query(`DROP TABLE ${tableName}`, (error, results, fields) => {
    if (error) {
      console.error("Error deleting table: " + error);
      callback(error, null, null);
      return;
    }
    console.log("Table deleted successfully.");
    callback(null, results, fields);
  });
  db.end();
};

// Function to drop all tables (This is not a standard SQL operation and needs to be handled carefully);
export const dropAllTables = (callback) => {
  /*
  callback(function);
  */
  connect;
  console.log("This operation is not supported.");
  callback("This operation is not supported.", null, null);
  db.end();
};

export default {
  createTable,
  dbSelectTable,
  dbInsert,
  dbDeleteTable,
  dropAllTables,
};
