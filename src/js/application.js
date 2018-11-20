$(function() {
    // bind click event on the search button
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

    












});