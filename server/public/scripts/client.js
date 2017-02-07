$(document).ready(function(){
  console.log("ready");

  // landing page to about click
  $("#landingClick").on('click', function(){
    console.log("Click works");
    $("#about").css("left", 0);
  });// end landing click

  // expand nav click
  $("#menuUpDown").on('click', function(){
    var navDispaly = $("#expandedNav").css("display");
    if(navDispaly == "none"){
      $("#navIcon").css("transform", "rotate(180deg)");
    }
    if(navDispaly =="block"){
      $("#navIcon").css("transform", "rotate(0deg)");
    }
    $("#expandedNav").toggle();
  });//end expandedNav
});
