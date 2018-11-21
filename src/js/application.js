$(function () {
    // bind click event on the search button
    $("#searchMovieBtn").click(function () {
        let movieTitle = $("#movieTitleInput").val();
        if (movieTitle) {
            $.get("http://www.omdbapi.com/?apikey=__API_KEY__&s=" + movieTitle)
                .done(function (data) {
                    console.log(data); 
                });
        }
        else {
            alert('No value entered for movie title :(');
        }
    }
    );
});