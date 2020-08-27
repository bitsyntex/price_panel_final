const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const prices = require(__dirname + '/prices.js');

console.log(prices);


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
    let cryptoPrices = prices;
    let priceBidbtc = cryptoPrices[0];
    let priceAskbtc = cryptoPrices[1];
    let priceBideth = cryptoPrices[2];
    let priceAsketh = cryptoPrices[3];
    io.emit('price update', priceBidbtc, priceAskbtc, priceBideth, priceAsketh);
}, 500);


server.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000.");
});


// setInterval(function () {
//     let cryptoPrices = prices();
//     let priceBidbtc = cryptoPrices.bidBtc();
//     let priceAskbtc = cryptoPrices.askBtc();
//     let priceBideth = cryptoPrices.bidEth();
//     let priceAsketh = cryptoPrices.askEth();
//     io.emit('price update', priceBidbtc, priceAskbtc, priceBideth, priceAsketh);
// }, 500);