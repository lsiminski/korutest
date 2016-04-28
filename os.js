
$.getJSON('oblique.json', function(data) { 
    
  var randomStrategy = data.promptcards[Math.floor(Math.random()*data.promptcards.length)];
  console.log(randomStrategy.prompt);
  $("#oblique_promptcards p").text(randomStrategy.prompt);

  /*
$.each(data.promptcards, function(data) {
    $('#fulllist').append('<li class="prompt"><p>' + this["prompt"] + '</p></li>');
  });
*/
    
});

$('#oblique_promptcards').click(function() {
  document.location.reload(true);
});
