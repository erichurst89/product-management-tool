const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // You can use any port number you prefer
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'inventoryprojectdb'
});

// Establish MySQL connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Define routes

app.get('/', (req, res) => {
    res.send('Hello World! This is your backend server.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});