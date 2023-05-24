const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7zNZUtcbTuMAxmu5O1El/likes";
export const getLikes = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const slicedLikes = data.slice(0, 3);
    console.log(slicedLikes);
    return slicedLikes;
  } catch (error) {
    return error;
  }
};

export const addLike = async (id) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    movie.displayMovies();
  } catch (error) {
    return error;
  }
};
