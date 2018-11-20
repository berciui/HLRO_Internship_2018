$(function () {
   $("#searchMovieBtn").click(function () {
      if ($("#movieTitleInput").val()) {
         alert($("#movieTitleInput").val());
      }
      else {
         alert('No value entered for movie title :(');
      }
   }
   );

   $( "#movieTitleInput" ).on( "keydown", function(event) {
      if(event.which == 13){
         alert($("#movieTitleInput").val());
      }
    });
});