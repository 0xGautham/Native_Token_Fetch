import fetch from 'node-fetch';

// CoinGecko API endpoint for fetching top tokens
const endpoint = 'https://api.coingecko.com/api/v3/coins/markets';

// Function to fetch the top 10 tokens from CoinGecko
async function fetchTopTokens() {
    try {
        const response = await fetch(`${endpoint}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);

        if (response.status === 200) {
            const tokens = await response.json();

            // Log the top 10 tokens and their prices in USD
            console.log('Top 10 Tokens by Market Cap (in USD):');
            tokens.forEach((token, index) => {
                console.log(`${index + 1}. ${token.name} (Symbol: ${token.symbol}) - Price: $${token.current_price}`);
            });
        } else {
            console.error('Error fetching data from CoinGecko:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to fetch and display the top 10 tokens
fetchTopTokens();
