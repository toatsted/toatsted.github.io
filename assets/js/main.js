$.get("assets/components/nav.html", function(data) {
  $("#nav-placeholder").replaceWith(data);
});

$(document).ready(function() {
  // init sidenav
  $(".sidenav").sidenav();
});
