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
    $(document).ready(function(){
        $('#movieTitleInput').bind("enterKey",function(e){
          alert($("#movieTitleInput").val());
        });
        $('input').keyup(function(e){
          if(e.keyCode == 13)
          {
             $(this).trigger("enterKey");
          }
        });
    })});