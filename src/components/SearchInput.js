import React from 'react'

class SearchInput extends React.Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })

  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleClick(this.state.input)
      document.getElementById('searchForm').reset()
  }

  render(){
    return(
     <div>
       <form id='searchForm' onSubmit={this.handleSubmit}>
       <label>Search cities:</label>
       <input type="text" name={this.state.input} onChange={this.handleChange}/>
       <input type="submit" value="Submit" />
       </form>
     </div>
    )
  }
}

export default SearchInput
