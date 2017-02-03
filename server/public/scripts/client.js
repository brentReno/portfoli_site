$(document).ready(function(){
  console.log("ready");
  // landing page to about click
  $("#landingClick").on('click', function(){
    console.log("Click works");
    $("#about").css("left", 0);
  });
});
