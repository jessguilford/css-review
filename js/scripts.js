$(document).ready(function() {
  $(".menu-toggle").click(function(event) {
    $(".full-nav").fadeToggle();
    $(".container").toggleClass("is-pushed");
  });
});
