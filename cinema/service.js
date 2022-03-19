function makeServiceAjax(){
	let urlBase = "https://api.themoviedb.org/3/"
	let apiKey = "bcbd3d128cc6a6a1dbaf196884ed6101"

	let service = {
		getGenres,
		getMovie,
		getMovies,
		searchMovies,
		getMovieCredits,
		getMoviesByGenresAndFilter,
		getMoviesBetweenReleaseDate,
		getMovieCredits
	};




	function getGenres()
	{
		return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr")
		.then(response => response.json())
		.then(data => data)
	}

	function getMovie(id){

		return fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr")
		.then(response => response.json())
		.then(data=>data)
	}

	function getMovies(page_num){

		return fetch("https://api.themoviedb.org/3/discover/movie?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false%&page="+page_num+"&with_watch_monetization_types=flatrate")
		.then(response => response.json())
		.then(data => data)
	}

	function searchMovies(page_num, search){
		
		return fetch("https://api.themoviedb.org/3/search/movie?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr&query="+search+"&page="+page_num+"&include_adult=false")
		.then(response => response.json())
		.then(data => data)
	}


	function getMovieCredits(id){

		return fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr")
		.then(response => response.json())
		.then(data => data)
	}

	function getMoviesByGenresAndFilter(page_num, genres, sort_by)
	{
		if(genres != null)
		{
			return fetch("https://api.themoviedb.org/3/discover/movie?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr&sort_by="+sort_by+"&include_adult=false&include_video=false&page="+page_num+"&with_genres="+genres+"&with_watch_monetization_types=flatrate")
				.then(response => response.json())
				.then(data => data)
		} 
		else 
		{
			return fetch("https://api.themoviedb.org/3/discover/movie?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr&sort_by="+sort_by+"&include_adult=false&include_video=false&page="+page_num+"&with_watch_monetization_types=flatrate")
				.then(response => response.json())
				.then(data => data)
		}
	}
	function getMovieCredits(id){
		let result = []
		return fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr")
		.then(response => response.json())
		.then(data => data)
	}

	function getMoviesBetweenReleaseDate(page_num, sort_by, lte_date, gte_date, genres) 
	{	
		return fetch("https://api.themoviedb.org/3/discover/movie?api_key=bcbd3d128cc6a6a1dbaf196884ed6101&language=fr&sort_by="+sort_by+"&include_adult=false&include_video=false&page="+page_num+"&primary_release_date.gte="+gte_date+"&primary_release_date.lte="+lte_date+"&with_genres="+genres+"&with_watch_monetization_types=flatrate")
		.then(response => response.json())
		.then(data => data)
		
	}




	return service
}
