"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movie = prompt('Один из последних просмотренных фильмов?', '');
const imDb = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movie] = imDb;
console.log(personalMovieDB);





// question[0] = prompt('Один из последних просмотренных фильмов?', movie);
// question[1] = prompt('На сколько оцените его?', imDb);

//  document.write(personalMovieDB.movies);




