import axios from'axios';

const api =axios.create({baseURL:'https://backendcatalogo.herokuapp.com/'});

export default api;