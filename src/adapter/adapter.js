const getWeather = (input) => {
  const baseUrl = `http://localhost:3030/api/v1/cities/${input}`

  //perhaps only one city needs to be in the data base so that we can fetch. point is: at this point we need something at id: 1 so that we can make an call to the api via the backend. check how rishi used pokemmon api more closely. perhaps the fetch doesn't happen in the controller? ->but it has to if we want to save a particular city in the database
  //possible flow: 1. make api call 2. find or create by in show method or redirect to create method 3. associate to user once we build that out
  return fetch(baseUrl)
          .then(r => r.json())
}


export default getWeather
