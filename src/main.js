$(document).ready(function() {
  $('#dinofy').submit(function(event) {
    event.preventDefault();
    let paragraphs = $('#paragraphs').val();
    $('#paragraphs').val("");
    let words = $('#words').val();
    $('#words').val("");
    $.ajax({
      url: `http://dinoipsum.herokuapp.com/api/?paragraphs=${paragraphs}&words=${words}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#dinoipsum').text(`${response}`);
      },
      error: function() {
        $('#errors').text("You fucking suck.");
      }
    });
  });
});
