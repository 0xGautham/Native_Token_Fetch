import fetch from 'node-fetch';

fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
    headers: {
        "X-CoinAPI-Key": "9566BC6D-BAEB-4D65-A5D2-C01AB0F42247"
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


