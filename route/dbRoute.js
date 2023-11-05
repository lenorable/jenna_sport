const express = require('express');
const router = express.Router();
const path = require('path');


const pgp = require('pg-promise')();

// Define your PostgreSQL connection configuration
const dbConfig = {
    user: 'admin',
    password: 'Pa$$w0rd',
    host: 'localhost',
    port: 5432,
    database: 'JennaReview'
};

// Create a database connection instance
const db = pgp(dbConfig);

router.get('/connect', async (req, res) => {
    db.connect()
        .then(obj => {
            console.log('Connected to PostgreSQL database');
            obj.done();
            res.status(200).send("connected");
        })
        .catch(error => {
            console.error('Error connecting to PostgreSQL:', error);
            res.status(500).send("oopsie doopsie");
        });


});

router.post('/query', async (req, res) => {
    try {
        const data = await db.query(req.body.query);
        res.status(200).send( data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send("oopsie doopsie");
    }
})

module.exports = router;