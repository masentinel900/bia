export const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
      }
  
      return response;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error;
    }
  };
  