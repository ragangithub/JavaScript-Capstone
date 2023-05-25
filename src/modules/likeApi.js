const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m8AZVOhORDmZV080nkzY/likes';
export const getLikes = async (number) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const slicedLikes = data.slice(0, number);

    return slicedLikes;
  } catch (error) {
    return error;
  }
};

export const addLike = async (id) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    return response;
  } catch (error) {
    return error;
  }
};
