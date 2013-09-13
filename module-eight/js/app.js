$(function () {
    var search;
    var movies;
    var parameterData;
    var parameterUrl;
    var pageNumber;
    var total;
    var pageLimit = 30;
    var data = {q: '', apiKey:'kzydjpv969n5v7hzumzeyb5c', page_limit: pageLimit, page: 1};
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/';
    
    function request(urlIn, dataIn){
        parameterUrl = urlIn;
        parameterData = dataIn;

        $.ajax({
            url: urlIn,
            dataType: 'jsonp',
            data: dataIn,
            success: showMovies
        });
    }

    function getTemplate(template_name, dataIn){
        var markup = '';
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(dataIn);
        return markup;
    }

    function showMovies(response){
        console.log(response);

        total = response.total;
        movies = response.movies;

        if (movies.length > 0){


            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];
                $('#list').append(getTemplate('movie-container', movie));
            }
        } else {
            console.log('Error. No Search Result');

        }
    }

    $('#searchbox').keydown(function(event){
        if (event.which == 13) {
            $('#searchButton').click();
        };
    });

    $('#searchButton').click(function(){
        search = $('#searchbox').val();
        data.q = search;
        resetValues();
        $('#searchbox').val(search);

        if (search.length > 0){
            request("http://api.rottentomatoes.com/api/public/v1.0/movies.json", data);
        } else {
            console.log("Error. No Input");
            alert('Please Input Title/Keyword before clicking Search');
        }
    });

    $(function(){
        $("example").popover('show');
    });

    $('#boxOffice').click(function(){
        resetValues();
        request(url + "movies/box_office.json", data);
    });

    $('#in-theaters').click(function(){
        resetValues();
        request(url + "movies/in_theaters.json", data);
    });

    $('#openMovies').click(function(){
        resetValues();
        request(url + "movies/opening.json", data);
    });

    $('#upMovies').click(function(){
        resetValues();
        request(url + "movies/upcoming.json", data);
    });

    $('#topRentals').click(function(){
        resetValues();
        request(url + "dvds/top_rentals.json", data);
    });

    $('#currentRel').click(function(){
        resetValues();
        request(url + "dvds/current_releases.json", data);
    });

    $('#newDVD').click(function(){
        resetValues();
        request(url + "dvds/new_releases.json", data);
    });

    $('#upDVD').click(function(){
        resetValues();
        request(url + "dvds/upcoming.json", data);
    });

   
    function resetValues(){
        var myNode = document.getElementById("list");
        myNode.innerHTML = '';

        console.log('Searching movies');
        alert('Now Loading. Click OK to Continue.');
        $('#searchbox').val('');
        movies = [];
        pageNumber = 1;
        parameterUrl = '';
        parameterData = '';
        total = 0;
        data.page = 1;
    }

});