import axios from 'axios';

const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.portals.fi/v2/tokens?search=eth&platforms=native&networks=ethereum',
    headers: {}
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
