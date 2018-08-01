import React from 'react'
import ForecastItem from './ForecastItem'


class ForecastList extends React.Component {

  state = {
    toggle: true
  }

  renderOneDay = () => {
    if (this.props.clickedFavCity) {
      return <ForecastItem data={this.props.clickedFavCity} />
    } else {
    return <ForecastItem data={this.props.weatherData} />
    }
  }


  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    console.log(this.props.clickedFavCity);
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.toggle ? "Today's Weather" : "5 Day Forecast"}
        </button>
        <div>
         {this.state.toggle ? this.renderOneDay() : this.renderOneDay()}
       </div>
      </div>
      )
  }



}

export default ForecastList
