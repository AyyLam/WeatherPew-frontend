import React from 'react'
import ForecastItem from './ForecastItem'


class ForecastList extends React.Component {

  state = {
    toggle: true
  }

  renderOneDay = () => {
    return <ForecastItem data={this.props.weatherData} clickedFavCity={this.props.clickedFavCity} />
  }


  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    return (
      <div>
      {/*  <button onClick={this.handleToggle}>
          {this.state.toggle ? "Today's Weather" : "5 Day Forecast"}
        </button>*/}
        <div>
         {this.state.toggle ? this.renderOneDay() : this.renderOneDay()}
       </div>
      </div>
      )
  }



}

export default ForecastList
