$(document).ready(function(){
	$('#send').click(function(){

		var searchmovie = $('#movie').val();
		
		if(searchmovie == ""){
			alert("Error: Empty Search Box! Please input title/keyword to continue process");
		
		if(searchmovie ==""){
			alert("Error: Keyword too short. Please try again");
			}
			
		}

			
			$('#searchresult').html("");
			
			$('#searchresult').append('<p>Search Result/s for: ' +searchmovie+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: searchmovie,
					apiKey: 'kzydjpv969n5v7hzumzeyb5c'
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
           
          $('.movie_container').append('<center><table class="table-bordered">'+'<tbody><tr class="tr"><div class="movie_holder">'+'<td style="width: 90px;"><div class="thumb">'+'<img src="' +movie.posters.thumbnail+'" width = "100" height = "100"/></td>'+'</div>'+'<td style="width: 150px;"><div class="title">'+'<p class="movie_title">' +movie.title+ '</p></td>'+'<td style="width: 500px;"><div class="synopsis">'+synopsis+'</td>'+'</div>'+'</div>'+'<td style="width: 90px;"><center><div class="year">' +movie.year+ '</td>'+'</div>'+'</div></center>'+'<div class="clear">'+'</div>'+'</tbody>'+'</table></center>');
         
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

