import React from 'react'
import ForecastList from './ForecastList'

const APIKey = `222f7b891045d46aae991ed06a422d63`

class CityPage extends React.Component {

// All of this has to go to User
  handleFavorite = () => {
    this.props.addFavedCity(this.props.weatherData)
  }
  
  render () {
    return (
      <div>
      <button onClick={this.handleFavorite}>Favorite Me!</button>
        <ForecastList weatherData={this.props.weatherData}/>
      </div>
      )
  }



}

export default CityPage
