import React from 'react'
import ForecastItem from './ForecastItem'


class ForecastList extends React.Component {

  state = {
    toggle: true
  }

  renderOneDay = () => {
    return this.props.weatherOneData.map((day) => {
      return <ForecastItem day={day} length={1}/>
    })
  }

  renderFiveDay = () => {
    return this.props.weatherFiveData.map((day) => {
      return <ForecastItem day={day} length={5}/>
    })
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
        <p>
        {this.state.toggle ? this.renderOneDay() : this.renderFiveDay()}
        </p>
      </div>
      )
  }



}

export default ForecastList
