const express = require('express'), app = express(), mysql = require('mysql'), cors = require('cors'), bodyParser = require('body-parser'), userRouter = require('./routes/user');
var server = {
    port: 8080
};
var db = mysql.createConnection({
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'my_db',
})
app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);
app.listen(server.port, () => console.log('listening on port ' + server.port));