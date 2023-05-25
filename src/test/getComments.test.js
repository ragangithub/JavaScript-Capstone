const { getComments } = require('../modules/commentApi.js');

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      username: 'Mr. David',
      creation_date: '2022-08-31',
      comment: 'How are you',
    },
    {
      creation_date: '2022-08-31',
      username: 'Sami',
      comment: 'Yes',
    },
  ]),
}));

describe('comment counter tests using Jest', () => {
  test('test Comment Count ', async () => {
    const response = await getComments(1);
    expect(response.length).toBe(2);
  });
});
