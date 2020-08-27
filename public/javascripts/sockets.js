$(document).ready(function () {
    let socket = io();

    socket.on('price update', function (priceBidbtc, priceAskbtc, priceBideth, priceAsketh) {
        $('#btc-bid').html(`${priceBidbtc}`)
        $('#btc-ask').html(`${priceAskbtc}`)
        $('#eth-bid').html(`${priceBideth}`)
        $('#eth-ask').html(`${priceAsketh}`)
    })
});