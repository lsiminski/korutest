
$.getJSON('oblique.json', function(data) { 
    
  var randomStrategy = data.promptcard[Math.floor(Math.random()*data.promptcard.length)];
  console.log(randomStrategy.strategy);
  $("#oblique_promptcard p").text(randomStrategy.strategy);

  $.each(data.promptcard, function(data) {
    $('#fulllist').append('<li class="strategy"><p>' + this["strategy"] + '</p></li>');
  });
    
});

$('#oblique_promptcard').click(function() {
  document.location.reload(true);
});
