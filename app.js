const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);
const io = require('./util/socket').socketDeploy(server);
const prices = require(__dirname + '/prices.js');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', socket => {
    console.log('A new WebSocket connection has been established');
});

setInterval(function () {
    prices.getPrice();
}, 500);


server.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000.");
});

