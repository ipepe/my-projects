// delete movie
var deleteBtn = document.querySelectorAll('.movies li .delete');

function removeItem(e) {
  const movie = e.target.parentElement;
  movie.parentNode.removeChild(movie);
}

Array.from(deleteBtn).forEach(function (btnTrash) {
  btnTrash.addEventListener('click', removeItem);
});

//clear all
function clearAll() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', function () {
    const all = document.querySelectorAll('.movies li');
    const parent = all[0].parentNode;
    for (var i = 0; i < all.length; i++) {
      parent.removeChild(all[i]);
    }
  });
}

clearAll();

const movieList = document.querySelector('.movies');

// add movie
const formAddMovie = document.forms['addMovie'];
formAddMovie.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTitle = formAddMovie.querySelector('input[type="text"]').value;

  // create new element
  const li = document.createElement('li');
  const newIcon = document.createElement('img');
  newIcon.setAttribute('src', 'img/dots.png');
  newIcon.setAttribute('alt', 'drag & drop');
  const newMovieTitle = document.createElement('span');
  const newDeleteBtn = document.createElement('span');

  newMovieTitle.textContent = newTitle;

  // add classes
  newMovieTitle.classList.add('title');
  newDeleteBtn.classList.add('delete');

  // append new element
  li.appendChild(newIcon);
  li.appendChild(newMovieTitle);
  li.appendChild(newDeleteBtn);
  movieList.appendChild(li);

  newDeleteBtn.addEventListener('click', removeItem);

  //clear input field
  document.getElementById('add').value = "";

});

//search movie
const search = document.forms['searchMovies'].querySelector('input');
search.addEventListener('keyup', function (e) {
  const phrase = e.target.value.toLowerCase();
  const movies = movieList.getElementsByTagName('li');
  Array.from(movies).forEach(function (movie) {
    const title = movie.children[1].textContent;
    if (title.toLowerCase().indexOf(phrase) != -1) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  })
});

//sort movies
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sort').onchange = sortMovies;
});

function sortMovies(e) {
  var movieList = document.querySelector('.movies');

  if (e.target.value == 'a-z') {
    Array.prototype.slice.call(movieList.children)
      .map(function (x) {
        return movieList.removeChild(x);
      })
      .sort(function (x, y) {
        return x.children[1].textContent > y.children[1].textContent ? 1 : -1;
      })
      .forEach(function (x) {
        movieList.appendChild(x);
      });

  } else if (e.target.value == 'z-a') {
    Array.prototype.slice.call(movieList.children)
      .map(function (x) {
        return movieList.removeChild(x);
      })
      .sort(function (x, y) {
        return x.children[1].textContent > y.children[1].textContent ? -1 : 1;
      })
      .forEach(function (x) {
        movieList.appendChild(x);
      });
  }
}
