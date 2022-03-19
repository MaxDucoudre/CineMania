function makeLocalStorageManager()
{

	let manageLocalStorage = 
	{
		getItem,
		setItem
	}


	function setItem(key, item) { localStorage.setItem(key, JSON.stringify(item)) }

	function getItem(key, item) 
	{

		
		if(JSON.parse(localStorage.getItem(key)) == null)
			 localStorage.setItem(key, JSON.stringify(item))

		return JSON.parse(localStorage.getItem(key))
	}




	return manageLocalStorage;

}