$(document).ready(function(){
	$('#send').click(function(){

		var searchmovie = $('#movie').val();
		
		if(searchmovie == ""){
			alert("Error: Empty Search Box! Please input title/keyword to continue process");
			
		}

			
			$('#searchresult').html("");
			
			$('#searchresult').append('<p>Search Result/s for: ' +searchmovie+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: searchmovie,
					apiKey: 'hcrurhsttexasrgfm2y6yahm'
				},
					dataType: 'jsonp',
					success: showMovies
			});


      function showMovies(response){
    
      console.log(response);
        $('.movie_container').html("");
        for(i=0;i<response.movies.length;i++){
          
          var movie = response.movies[i];
          var synopsis = movie.synopsis;
            
          $('.movie_container').append('<table class="table">'+' <tbody>'+'<tr>'+'<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synopsis+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</tbody> </thead> </div><hr>');
         
          var numberResult = response.movies.length;
          console.log(numberResult); 
          $('#counter').html("");
          $('#counter').append('<p>Result: <strong>' +numberResult+ '</strong> movie/s found!</p>');
          
        }
        }		

        
    
        $( '#formmovie' ).submit(function(e){
          e.preventDefault();
        });
      
    });

});

