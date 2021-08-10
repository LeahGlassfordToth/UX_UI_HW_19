$(document).ready(function(){
    $(".navButtons > a").click(function() {
      $(".hamburgerMenu").addClass("active");
    });
    $(".close").click(function() {
      $(".hamburgerMenu").removeClass("active");
    });
  });