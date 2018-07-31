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
    return(
      <div>

      {/*<div>{this.props.name}</div>*/}

        <div className="info-maxTemp-fl">{this.props.maxTemp}</div>
      </div>
    )
  }

}
export default FavoriteCity
