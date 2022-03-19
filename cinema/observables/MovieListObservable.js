function EventMoviesList()
{
	  // Rend l'instance Car observable
  riot.observable(this)

  // réagit à l'événement 'start'
  this.on('start', function() {
    console.log("start EventMoviesList")
  })

}
// crée une nouvelle instance EventMoviesList
var eventMovieList = new EventMoviesList()

// déclenche l'événement 'start'
eventMovieList.trigger('start')