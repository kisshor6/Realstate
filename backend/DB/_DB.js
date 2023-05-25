const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'realstate'
});
connection.connect((error) => {
    if (!error) {
        console.log(`====> connected with database <====`);
    } else {
        console.log(`====> Failed to connect with database <====`);
    }
})

module.exports = connection;