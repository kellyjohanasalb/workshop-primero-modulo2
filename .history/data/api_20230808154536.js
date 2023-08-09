import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }