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
        $.get("http://www.omdbapi.com/?apikey=11f1895&s=" + movieTitle)
            .done(function (data) {
                console.log(data);
                $("#moviesList").loadTemplate("../src/templates/movieItemTemplate.html", data.Search, {});
            });
    }
    else {
        alert('No value entered for movie title :(');
    }
}
