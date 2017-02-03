$(document).ready(function(){
  console.log("ready");
  // landing page to about click
  $("#landingClick").on('click', function(){
    console.log("Click works");
    $("#about").css("left", 0);
  });// end landing click
  // expand nav click
  $("#menuUpDown").on('click', function(){
    $("menuUpDown, img").toggle();
    $("#expandedNav").toggle();
  });//end expandedNav
});
