const express = require('express'), router = express.Router();

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


module.exports = router;