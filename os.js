
$.getJSON('oblique.json', function(data) { 
    
  var randomCard = data[Math.floor(Math.random()*data.length)];
  console.log(randomCard);
  /* $("#oblique_strategies p").text(randomStrategy.strategy); */

$.each(data, function(data) {
		  $("#oblique_category p").text(this.category);
		  $("#oblique_prompt p").text(this.prompt);
		  $("#oblique_icons p").html("<img src='" + this.url + "'>");
		  $("body.random").css("background-color");
  });
    
   /*  $("#oblique_icons p").text(this.Image); */
  /*  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>"); */
    
});

$('#oblique_cards').click(function() {
  document.location.reload(true);
});
