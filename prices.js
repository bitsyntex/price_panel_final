const https = require("https");

module.exports.getPrice = function() {
    const url = "https://panel.cashbroker.com/Themes/Controls/ExchangeRatesForCashBroker.ashx?SkipBgnAndCross=0";
    https.get(url, function (response) {
        response.on("data", function (data) {
            const dataCrypto = JSON.parse(data);
            let priceBidbtc = Number(dataCrypto.data.BTC.buy).toFixed(2);
            let priceAskbtc = Number(dataCrypto.data.BTC.sell).toFixed(2);
            let priceBideth = Number(dataCrypto.data.ETH.buy).toFixed(2);
            let priceAsketh = Number(dataCrypto.data.ETH.sell).toFixed(2);
            const io = require('./util/socket').getIO();
            io.emit('price-update', priceBidbtc, priceAskbtc, priceBideth, priceAsketh);
        });
    });
}
