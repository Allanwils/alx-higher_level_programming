$(function() {
  $.ajax({
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    method: 'GET'
  })
  .done(function(data) {
    $('#hello').text(data.hello);
  });
});
