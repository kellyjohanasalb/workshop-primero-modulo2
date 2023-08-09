async function get() {
    try {
      const response = await axios.get('http:');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }