
$.getJSON('oblique.json', function(data) { 
    
  var randomStrategy = data.promptcards[Math.floor(Math.random()*data.promptcards.length)];
  console.log(randomStrategy.prompt);
  $("#oblique_promptcards p").text(randomStrategy.prompt);


$.each(data, function(data) {
	  if ( this.date === moda ) {
		  $("#oblique_prompt p").text(this.prompt);
		  $("#oblique_category p").text(this.category);
		  $("#oblique_icons p").text(this.Image);
		  $("body.random").css("background-image","url(" + this.image + ")");
	  } else {
	  }
  });

  /*
$.each(data.promptcards, function(data) {
    $('#fulllist').append('<li class="prompt"><p>' + this["prompt"] + '</p></li>');
  });
*/
    
});

$('#oblique_promptcards').click(function() {
  document.location.reload(true);
});
