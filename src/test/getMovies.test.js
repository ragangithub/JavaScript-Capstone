import getMovies from "../modules/movieApi.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          show: {
            id: 1,
            url: "https://www.tvmaze.com/shows/230/go-on",
            name: "First movie",
            type: "Scripted",
            language: "English",
          },
        },
        {
          show: {
            id: 2,
            url: "https://www.tvmaze.com/shows/228/last-resort",
            name: "Last Movie",
            type: "Scripted",
            language: "English",
          },
        },
      ]),
  })
);

describe("items counter tests using Jest", () => {
  test("test getMovies function to the result", async () => {
    const response = await getMovies();

    expect(response.length).toBe(2);
  });
});
