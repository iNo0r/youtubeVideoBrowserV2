import React from 'react';


class SearchBar extends React.Component {
  state= {
    term: null
  }
  render(){
    return(
      <div className='search-bar'>

      <input value={this.state.term}  
      onChange={(event) => this.onInputChange(event.target.value) } />
      </div>

    )
  }
  onInputChange = (event) => {
    this.setState({term:event})
    this.props.onSearchTermChange(event)
  }
}

export default SearchBar;