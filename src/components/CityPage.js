import React from 'react'
import ForecastList from './ForecastList'

const APIKey = `222f7b891045d46aae991ed06a422d63`

class CityPage extends React.Component {

// All of this has to go to User
  state = {
    weatherOneData: [],
    weatherFiveData: []
  }

  getWeatherOneData = () => {
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=Queens&appid=${APIKey}&units=imperial`
    return fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        if(data.name){
          this.setState({
            weatherOneData: [data]
          })
      } else {
        alert("Invalid city/country")
      }
    })
  }

  componentDidMount() {
    this.getWeatherOneData()
    this.getWeatherFiveData()

  }
  getWeatherFiveData = () => {
    const baseURL = `http://api.openweathermap.org/data/2.5/forecast?q=Queens&appid=${APIKey}&units=imperial`
    return fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        if(data.city.name){
          this.setState({
            weatherFiveData: data.list
            })
      } else {
        alert("Invalid city/country")
      }
    })
  }

  handleFavorite = () => {
    this.props.addFavedCity(this.state.weatherOneData)
  }
  render () {
    return (
      <div>
      <button onClick={this.handleFavorite}>Favorite Me!</button>
        <ForecastList weatherOneData={this.state.weatherOneData} weatherFiveData={this.state.weatherFiveData}/>
      </div>
      )
  }



}

export default CityPage
