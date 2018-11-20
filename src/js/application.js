$('body').on('keypress', 'movieTitleInput', function(e) {
    if (e.keyCode == 13) {
        $("#movieTitleInput").click(){
            alert($("#searchMovieBtn").val());
        };
        else {
            alert('No value entered for movie title :(');
        }
        
    }
});