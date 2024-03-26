//TO DO: despues conectar
export const  getApiData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.error("Error: ", e);
    }
  };