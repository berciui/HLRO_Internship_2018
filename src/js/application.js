$(function () {
    // bind click event on the search button
    $("#searchMovieBtn").click(handleSearch);
    $("#movieTitleInput").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            handleSearch();
        }
    });
});

function handleSearch() {
    let movieTitle = $("#movieTitleInput").val();
    if (movieTitle) {
        $.get("https://www.omdbapi.com/?apikey=11f1895&s=" + movieTitle)
            .done(function (serverResponseToGetRequest) {
                console.log(serverResponseToGetRequest);
                let movieListReturnedByServer = serverResponseToGetRequest.Search;
                console.log(movieListReturnedByServer);
                $("#moviesList").loadTemplate("src/templates/movieItemTemplate.html", movieListReturnedByServer, {});
            });
    }
    else {
        alert('No value entered for movie title :(');
    }
}
