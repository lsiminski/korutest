
$.getJSON('oblique.json', function(data) { 
    
  var randomStrategy = data.promptcards[Math.floor(Math.random()*data.promptcards.length)];
  console.log(randomStrategy.promptcards);
  $("#oblique_promptcards p").text(randomStrategy);


$.each(data, function(data) {
		  $("#oblique_prompt p").text(this.prompt);
		  $("#oblique_category").text(this.category);
		  $("#oblique_icons").text(this.Image);
		  $("body.random").css("background-image","url(" + this.image + ")");
/* 	  } else { */
	  })
  });

  /*
$.each(data.promptcards, function(data) {
    $('#fulllist').append('<li class="prompt"><p>' + this["prompt"] + '</p></li>');
  });
*/
    
});

$('#oblique_prompt').click(function() {
  document.location.reload(true);
});
