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
        // console.log(response[0][0]);
        // response[0].forEach(function(element) {
        //   console.log(element);
        //   response.toString(" ");
        //   $('#dinoipsum').html(`<li>${element}</li><br>`)
        //   console.log(what);
        // });
        // (var i = 0; i < response[0].length; i++) {
        //   $('#dinoipsum').html(`<li>${response[0][i]}</li>`)
        // }
        //
        // for (var i = 0; i < response[1].length; i++) {
        //   $('#dinoipsum2').html(`<li>${response[1][i]}</li>`)
        // }
        console.log(typeof response);
        response.forEach(function(element) {
          let stringResponse = "";
          stringResponse + element + " ";
          return stringResponse
        });
        console.log(stringResponse);
        $('#dinoipsum').html(`<h2>${stringResponse}</h2>`);
      },
      error: function() {
        $('#errors').text("You fucking suck.");
      }
    });
  });
});
