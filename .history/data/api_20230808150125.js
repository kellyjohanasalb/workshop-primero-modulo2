async function getUser() {
    try {
      const response = await axios.get('');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }