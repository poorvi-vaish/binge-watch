import axios from "axios";

const getMovies = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "e07557212emsh0796839ca02205cp12597bjsnda3a4c287fbe",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

      const response = await axios(options);
      return response.data;
    
  } catch (error) {
    console.error(error);
  }
};

export default getMovies;
