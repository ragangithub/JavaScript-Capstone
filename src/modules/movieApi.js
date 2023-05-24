const url = "https://api.tvmaze.com/shows";

export const getMovies = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const slicedData = data.slice(0, 3);
    console.log(slicedData);
    return slicedData;
  } catch (error) {
    return error;
  }
};
