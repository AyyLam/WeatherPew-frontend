import React from 'react'
import { Link } from 'react-router-dom'


class FavoriteCity extends React.Component {
  state = {
    clickedCityId: ''
  }


   handleRedirect = () => {
    this.setState({
      clickedCityId: this.props.key
    }, () => this.props.favCityPage(this.state.clickedCityId))
  }

  render(){
    console.log('id:', this.state.clickedCityId);
    debugger
    return(
      <div>

      {/*<div>{this.props.city.name}</div>*/}

        <div className="info-maxTemp-fl">{this.props.city.maxTemp}</div>
      </div>
    )
  }

}
export default FavoriteCity
