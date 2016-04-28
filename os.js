
$.getJSON('oblique.json', function(data) { 
    
  var randomStrategy = data.promptcards[Math.floor(Math.random()*data.promptcards.length)];
  console.log(randomStrategy.strategy);
  $("#oblique_promptcards p").text(randomStrategy.strategy);

  /*
$.each(data.promptcards, function(data) {
    $('#fulllist').append('<li class="strategy"><p>' + this["strategy"] + '</p></li>');
  });
*/
    
});

$('#oblique_promptcards').click(function() {
  document.location.reload(true);
});
