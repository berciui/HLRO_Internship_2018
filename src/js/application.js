$(function () {
    // bind click event on the search button
    $("#searchMovieBtn").click(handleSearch);
    $("#movieTitleInput").on("keydown", function (event) {
        if (event.which == 13) {
            handleSearch();
        }
    });

});

function handleSearch() {
    let movieTitle = $("#movieTitleInput").val();
    if (movieTitle) {
        $.get("http://www.omdbapi.com/?apikey=1c17ad99&s=" + movieTitle)
            .done(function (data) {
                console.log(data);
            });
    }
    else {
        alert('No value entered for movie title :(');
    }

}