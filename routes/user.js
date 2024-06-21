const express = require('express'), router = express.Router(), mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db',
});

router.get('/list', (req, res) => {
    let query = "SELECT * FROM users";
    db.query(query, (err, result, fields) => {
        if (err) throw err;
        res.json({
            status: 200,
            result ,
            message: "user list obtained successfully"
        });
    });
});

router.post('/new', (req, res) => {
    let query = "INSERT INTO users(name, gender) values(?)";
    let values = [
        req.body.name,
        req.body.gender
    ];
    db.query(query, [values], (err, result, fields) => {
        if (err) throw err;
        res.json({
            status : 200,
            message: "user added successfully"
        });
    });
});



module.exports = router;