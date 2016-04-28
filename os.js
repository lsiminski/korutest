
$.getJSON('oblique.json', function(data) { 
    
  var randomCard = data[Math.floor(Math.random()*data.length)];
  console.log(randomCard);
  /* $("#oblique_strategies p").text(randomStrategy.strategy); */

  /*
$.each(data.strategies, function(data) {
    $('#fulllist').append('<li class="strategy"><p>' + this["strategy"] + '</p></li>');
  });
*/

$.each(data, function(data) {
		  $("#list_prompt p").text(this.prompt);
		  $("#list_icons p").text(this.img);
		  $("#list_category p").text(this.category);
		  $("body.random").css("background-image","url(" + this.image + ")");
	  } else {
	  }
  });
    
});

$('#oblique_cards').click(function() {
  document.location.reload(true);
});
