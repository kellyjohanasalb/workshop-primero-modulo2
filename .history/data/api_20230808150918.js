import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
export async function createProduct(product) {
    try {
      const response = await axios.post(`http://localhost:3000/products/`, product);
      console.log("response create", response.data)
      return response
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
    }
  }



async function getProdcutos() {
    try {
      const response = await axios.get('http:');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }