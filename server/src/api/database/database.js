import mysql from "mysql"
import { db } from "../../../Variables";
const db = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
  });
  
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
  });
  