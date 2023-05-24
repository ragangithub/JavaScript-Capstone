const countMovies = (count) => {
  const counter = document.querySelector("#home");
  counter.innerHTML += `(${count})`;
};

export default countMovies;
