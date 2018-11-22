$(function () {
    // Bind click to Search
    $("#searchMovieBtn").click(handleSearch);

    $("#movieTitleInput").on("keydown", function (event) {
        if (event.which == 13) {
            handleSearch();
        }
    });
});

function handleSearch(){
    let movieTitle = $("#movieTitleInput").val();
    if (movieTitle) {
        $.get("http://www.omdbapi.com/?apikey=e373dab5&s=" + movieTitle)
            .done(function (getData){
                console.log (getData);
                $("movieList").loadTemplate("src/js/Template.movie.html", getData.Search, {});
            });
    }
    else {
        alert('Please enter movie title to search for!');
    }
}