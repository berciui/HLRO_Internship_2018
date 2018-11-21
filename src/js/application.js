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
    $.each(data.Search, function(movieData){
        let moviInfo = "<div class=\"card\" style=\"width: 18rem;\">\
        <img class=\"card-img-top\" src=\"" + movieData.Poster  + "\"\
            alt=\"Card image cap\">\
        <div class=\"card-body\">\
            <h5 class=\"card-title\">" + movieData.Title + "</h5>\
            <h6>" + movieData.Year +"</h6>\
            <p class=\"card-text\"></p>\
            <a href=\"#\" class=\"btn btn-primary\">Go to IMDb</a>\
        </div>";
        console.log(moviInfo);
    });
}