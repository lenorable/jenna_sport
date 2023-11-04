const pgp = require('pg-promise')();

// Define your PostgreSQL connection configuration
const dbConfig = {
  user: 'Wiener-fan',
  password: 'ciZ7xHbEuAN3cuqc7z0c8',
  host: 'localhost',
  port: 15432,
  database: 'luchtvaartmaatschappij',
};

// Create a database connection instance
const db = pgp(dbConfig);

// Test the connection
db.connect()
  .then(obj => {
    console.log('Connected to PostgreSQL database');
    obj.done(); // Release the connection when done
  })
  .catch(error => {
    console.error('Error connecting to PostgreSQL:', error);
  });

module.exports = db;