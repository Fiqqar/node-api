const express = require('express'), app = express(), cors = require('cors'), bodyParser = require('body-parser'), userRouter = require('./routes/user'), path = require('path');
var server = {
    port: 8080
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "/index.html"));
})
app.listen(server.port, () => console.log('listening on port ' + server.port));