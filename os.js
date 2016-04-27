
$.getJSON('oblique.json', function(data) { 
    
  var randomPrompt = data.promptcard[Math.floor(Math.random()*data.promptcard.length)];
  console.log(randomStrategy.strategy);
  $("#oblique_promptcard p").text(randomPrompt.prompt);

  $.each(data.promptcard, function(data) {
    $('#fulllist').append('<li class="prompt"><p>' + this["strategy"] + '</p></li>');
  });
    
});

$('#oblique_promptcard').click(function() {
  document.location.reload(true);
});
