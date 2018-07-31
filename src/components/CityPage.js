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
      <button className="favbutton" onClick={this.handleFavorite}><img className="favbuttonImg" src="https://clipart.info/images/ccovers/1518056312pink-heart-transparent-background.png"/></button>
        <ForecastList weatherData={this.props.weatherData}/>
      </div>
      )
  }



}

export default CityPage
