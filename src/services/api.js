//usaremos o axios para lidar com as requisições HTTP ao serviço

import axios from 'axios';

//criação da instância do axios para fazermos as requisições HTTP

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export default api;