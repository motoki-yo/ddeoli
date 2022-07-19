import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://localhost:6000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});