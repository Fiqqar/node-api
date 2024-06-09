const express = require('express'), router = express.Router();

router.get('/list', (req, res) => {
    res.send("<h1>List Page</h1>")
})


module.exports = router;