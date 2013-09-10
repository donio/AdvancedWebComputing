$(function() {

    var app = {};
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
    $.ajax({
        url: url,
        data: {
            apiKey: 'kzydjpv969n5v7hzumzeyb5c'
        },
        dataType: 'jsonp',
        success: showBoxOffice
    });
    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;

    }
    function showBoxOffice(response) {
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                movie._index = i;
                $('table tbody').append(getTemplate('tpl-box-office-item', movie));
        }
        $('table tbody>tr').hover(function(ev) {
            var data = $(ev.target).closest('tr').data();
            var movie = app.movies[data.id];
            $('.movie-detail').html(getTemplate('tpl-movie-detail', movie));
        });
    }
});