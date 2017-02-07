$(document).ready(function(){
  console.log("ready");

  // landing page to about click
  $("#landingClick").on('click', function(){
    $("#about").css("left", 0);
  });// end landing click

  // expand nav click
  $("#menuUpDown").on('click', function(){
    navToggle();
  });//end expandedNav

  //about nav click
  $("#aboutNav").on('click', function(){
    resetPages();
    $("#about").css("left", 0);
    navToggle();

  });
  $("#photoNav").on('click',function(){
    resetPages();
    $("#photo").css("left", 0);
    navToggle();
  });
  $("#videoNav").on('click', function(){
    resetPages();
    $("#video").css("top", 0);
    navToggle();
    });
  $("#webNav").on('click', function(){
    resetPages();
    $("#web").css("top", 0);
    navToggle();
    });

  var resetPages = function (){
    if($("#about").css("left",0)){
      $("#about").css("left", "-1275px");
    }
    if($("#photo").css("left",0)){
      $('#photo').css("left", "1275px");
    }
    if($("#video").css("left",0)){
      $('#video').css("top", "-699px");
    }
    if($("#web").css("left",0)){
      $('#web').css("top","699px");
    }
  };
  var navToggle = function(){
      var navDispaly = $("#expandedNav").css("display");
      if(navDispaly == "none"){
        $("#navIcon").css("transform", "rotate(180deg)");
      }
      if(navDispaly =="block"){
        $("#navIcon").css("transform", "rotate(0deg)");
      }
      $("#expandedNav").toggle();
  };

});
