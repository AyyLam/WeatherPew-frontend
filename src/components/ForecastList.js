import React from 'react'
import ForecastItem from './ForecastItem'


class ForecastList extends React.Component {

  state = {
    toggle: true
  }

  renderOneDay = () => {
      // debugger
      return <ForecastItem data={this.props.weatherData} />

  }


  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.toggle ? "Today's Weather" : "5 Day Forecast"}
        </button>
        Switcheroo
        <div>
         {this.state.toggle ? this.renderOneDay() : this.renderFiveDay()}
       </div>
      </div>
      )
  }



}

export default ForecastList
