import React from 'react'

class SearchInput extends React.Component {
  state = {
    input: ''
  }

  handleChange = (city) => {
    this.setState({
      input: city
    })
    this.props.handleClick(this.state.input)
  }

  handleSubmit = (e) => {
      e.preventDefault()
  }

  render(){
    console.log(this.state.input);
    return(
     <div>
       <form onSubmit={this.handleSubmit}>
       <label>Search cities:</label>
       <input type="text" value={this.state.input} onChange={(e) => this.handleChange(e.target.value)}/>
       <input type="submit" value="submit" />
       </form>
     </div>
    )
  }
}

export default SearchInput
