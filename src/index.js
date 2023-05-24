import './style.css';

import Movie from './modules/movie.js';
import { getLikes, addLike } from './modules/likeApi.js';
import { getComments, postComment } from './modules/commentApi.js';

const movie = new Movie();

window.onload = async () => {
  await movie.getMovies();
  const likes = await getLikes(movie.movies.length);
  movie.displayMovies(likes);
};

document.addEventListener('click', async (e) => {
  const target = e.target.closest('.likes');
  if (target) {
    const { id } = target.parentNode.parentNode;
    target.style.color = 'red';
    await addLike(id);
    const likes = await getLikes();
    target.style.color = 'white';
    movie.displayMovies(likes);
  }
});

document.addEventListener('click', async (e) => {
  const target = e.target.closest('.comment');
  if (target) {
    const { movies } = movie;
    const body = document.querySelector('body');
    const { id } = target.parentNode;
    const comments = await getComments(id);

    const modalContainer = document.createElement('li');
    modalContainer.className = 'popup';
    modalContainer.innerHTML = `
    <i  class="fa-solid fa-x"></i>
    
     <img class='popup-image' src="${movies[id - 1].image.medium}"  />
       <div>
       <p class='popup-name'>${movies[id - 1].name}</p>
  
      </div>

      <p class="movie-desc">
      ${movies[id - 1].summary}
      </p>
    

`;

    body.appendChild(modalContainer);

    if (Array.isArray(comments)) {
      modalContainer.innerHTML += `
      <div class='comment-counter'>
      comments(${comments.length})
      </div>
      `;
      comments.forEach((comment) => {
        modalContainer.innerHTML += `
        <div class="comments">
      <p class="comment-date">${comment.creation_date} ${comment.username} :</p>
      <p class="comment-msg">${comment.comment}</p>
      </div>`;
      });
    } else if (!Array.isArray(comments)) {
      modalContainer.innerHTML
        += " <div class='comment-counter'>comments(0)</div>";
    }
    modalContainer.innerHTML += `
    
      <form class='comment-form' >
      <h2 class="heading">Add a comment</h2>
        <input type="text" placeholder="Enter your name" required />
        <textarea placeholder="Enter your comment here" required></textarea>
        <button type="submit" class="btn">Submit</button>
      </form>
    `;

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('input');
      const commentMsg = document.querySelector('textarea');

      const commentData = {
        item_id: id,
        username: name.value,
        comment: commentMsg.value,
      };

      postComment(commentData);
      getComments(id);
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      name.value = '';
      commentMsg.value = '';
    });
  }
});

document.addEventListener('click', (e) => {
  const popup = document.querySelector('.popup');
  const target = e.target.closest('.fa-x');

  if (target) {
    popup.remove();
  }
});
