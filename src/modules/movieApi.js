const url = 'https://api.tvmaze.com/shows';

const getMovies = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const slicedData = data.slice(0, 9);
    return slicedData;
  } catch (error) {
    return error;
  }
};

export default getMovies;
