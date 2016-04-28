
$.getJSON('oblique.json', function(data) { 
    
  var randomCard = data[Math.floor(Math.random()*data.length)];
  console.log(randomCard);
  /* $("#oblique_strategies p").text(randomStrategy.strategy); */

$.each(data, function(data) {
		  $("#oblique_prompt p").text(this.prompt);
		  $("#oblique_icons p").text(this.img);
		  $("#oblique_category p").text(this.category);
		  $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#oblique_cards').click(function() {
  document.location.reload(true);
});
