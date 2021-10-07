// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter((item)=> item.director==="Steven Spielberg" && item.genre.includes("drama"))
  return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  if(!movies.length){
    return 0
  } else {
    const Array=movies.map((movie) => movie.score)
    const scoreAverage = Array.reduce((acc, cv)=> typeof cv === 'number' ? acc+cv : acc, 0)
    return Number.parseFloat( (average/scoreArray.length).toFixed(2) )
  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  const dramaScore = array.filter(function(movie){
    return movie.genre.includes("Drama");
  })
  return scoresAverage(dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
