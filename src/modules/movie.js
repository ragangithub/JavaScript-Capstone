import getMovies from './movieApi.js';

import countMovies from './counter.js';

export default class Movie {
  constructor() {
    this.movies = [];
  }

  getMovies = async () => {
    const movies = await getMovies();

    this.movies = movies;
    countMovies(this.movies.length);
  };

  displayMovies = (likes) => {
    const container = document.querySelector('.movies');

    container.innerHTML = '';

    this.movies.forEach((movie, index) => {
      const li = document.createElement('li');
      li.className = 'cards';
      li.innerHTML = `
 <img src="${movie.image.medium}"  />
 <div class='heart'>
   <p class='name'>${movie.name}</p>
   <i class="fa-solid fa-heart likes"></i>
 </div>
 <div class='show-likes'>Likes ${likes[index].likes}</div>
 <button class="comment">comments</button>
 `;

      li.id = movie.id;

      container.appendChild(li);
    });
  };
}
