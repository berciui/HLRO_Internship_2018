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
            .done(processMovieListFromServer);
    }
    else {
        alert('Enter movie title to search for!');
    }
}

function processMovieListFromServer(data){
    console.log(data);
}