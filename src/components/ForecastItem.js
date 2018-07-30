import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <p>{this.props.day.name}</p>
        <p>{this.props.day.main.temp}</p>
        <p>{this.props.day.main.temp_min}</p>
        <p>{this.props.day.main.temp_max}</p>
        <p> WEEEEEEEEE </p>
      </div>
      )
  }



}

export default ForecastItem
