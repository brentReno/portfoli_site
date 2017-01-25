$(document).ready(function(){
  console.log("ready");
  console.log("ready");

  $(".showSection").on("click", function(){
    if($("#about").hasClass("show")){
        $("#about").removeClass("show");
    }
    if($("#photo").hasClass("show")){
        $("#photo").removeClass("show");
    }
    if($("#video").hasClass("show")){
        $("#video").removeClass("show");
    }
    if($("#web").hasClass("show")){
        $("#web").removeClass("show");
    }
    $(this).addClass(" show");
  });
});
