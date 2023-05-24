const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9ifaHyOaZjD6ixc1cQTf/comments";

export const getComments = async (id) => {
  try {
    const response = await fetch(`${url}/?item_id=${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const postComment = async (data) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
