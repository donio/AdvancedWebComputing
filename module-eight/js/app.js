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

	function showBoxOffice(response){
		var movie;
		for(var i = 0; i < response.movies.length; i++){
			movie = response.movies[i];
			var template = $('#tpl-movie').html();
			var $template = Handlebars.compile(template);
			var markup = $template(movie);
			console.log('markup', markup);
			$('ul').append(markup);
		}
	}
});