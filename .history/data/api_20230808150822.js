import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';



async function getProdcutos() {
    try {
      const response = await axios.get('http:');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }