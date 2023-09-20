import axios from 'axios';

async function fetchTokenData() {
    try {
        const response = await axios.get('https://api.coincap.io/v2/assets');

        if (response.status === 200) {
            const tokenData = response.data.data;
            tokenData.forEach((token) => {
                console.log(`Name: ${token.name}`);
                console.log(`Symbol: ${token.symbol}`);
                console.log(`Price USD: $${parseFloat(token.priceUsd).toFixed(2)}`);
                console.log(`Market Cap USD: $${parseFloat(token.marketCapUsd).toFixed(2)}`);
                console.log('-----------------------------------');
            });
        } else {
            console.error('Error fetching data from CoinCap API:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}


fetchTokenData();
