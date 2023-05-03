$.get({
  url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
  success: function (data) {
    $('<div>').attr('id', 'character').text(data.name).appendTo('body');
  }
});
