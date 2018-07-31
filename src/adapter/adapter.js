import App from '../App.js'

export const getWeather = (input) => {
  const baseUrl = `http://localhost:3030/api/v1/forecasts/${input}`

  return fetch(baseUrl)
          .then(r => r.json())
}

export const getCity = (input) => {
  const baseUrl = `http://localhost:3030/api/v1/city_users/${input}`

  return fetch(baseUrl)
          .then(r => r.json())
}

export const createCity = (input) => {
  const baseUrl = 'http://localhost:3030/api/v1/cities'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({name: input.city, maxTemp: input.maxTemp, minTemp: input.minTemp})
  }
  return fetch(baseUrl, options)
          .then(r => r.json())
}

export const createCityUser = (input1, input2) => {
  const baseUrl = 'http://localhost:3030/api/v1/city_users'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({city_id: input1.id, user_id: input2.id})
  }
  return fetch(baseUrl, options)
          .then(r => r.json())
}

export const createUser = (input) => {
  const baseUrl = 'http://localhost:3030/api/v1/users'
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({name: input.name})
  }
  return fetch(baseUrl, options)
          .then(r => r.json())
}
