import React from 'react'

class ForecastItem extends React.Component {

  render () {
    return (
      <div>
        <div>{this.props.data.city}</div>
        <div>{this.props.data.maxTemp}</div>
        <div> WEEEEEEEEE </div>
      </div>
      )
  }



}

export default ForecastItem
