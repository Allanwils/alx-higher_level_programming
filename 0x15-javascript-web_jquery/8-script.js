$.ajax({
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {
  $('UL#list_movies').append(...data.results.map(movie => `<li>${movie.title}</li>`));
});
