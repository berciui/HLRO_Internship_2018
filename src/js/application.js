$(function() {
    $("#searchMovieBtn").click( function()
         {
             if($("#movieTitleInput").val()){
                alert($("#movieTitleInput").val());
             }
             else{
                alert('No value entered for movie title :(');
             }
         }
    );
    var input= document.getElementById("searchMovieBtn")
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchMovieBtn").click();
  }
});
});