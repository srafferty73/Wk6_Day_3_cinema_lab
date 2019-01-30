const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitleList = function () {
  const film_title_list = [];
  this.films.forEach((film) => {
    film_title_list.push(film.title);
  });
  return film_title_list;
};

Cinema.prototype.findFilm = function (film) {
  const filmTitles = this.getFilmTitleList();
  var found = filmTitles.find(function(film) {
    return film === "Dunkirk";
  });
};

Cinema.prototype.findFilmGenre = function (genre) {
  const result = this.films.filter(films => films.genre === genre);
  return result;
};

Cinema.prototype.checkFilmsByYear = function (year) {
  const result = this.films.filter(films => films.year === year);
  return result;
};

Cinema.prototype.checkFilmsByLength = function (length) {
  const result = this.films.filter(films => films.length >= length);
  return result;
};

Cinema.prototype.totalLengthOfFilms = function () {
  const film_lengths = [];
  this.films.forEach((film) => {
    film_lengths.push(film.length);
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (film_lengths.reduce(reducer));
};


// const total = numbers.reduce((runningTotal, number) => {
//     return runningTotal + number;
//   }, 0);
//   return total;

module.exports = Cinema;
