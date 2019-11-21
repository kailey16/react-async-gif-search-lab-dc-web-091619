import React from 'react'

class GifSearch extends React.Component {

  state = {
    searchterm: ""
  }

  searchInput = (e) => {
    console.log(e.target.value)
    this.setState({
      searchterm: e.target.value
    })
  }

  render() {
    return (
      <div><form onSubmit={(e) => {
        e.preventDefault();
        this.props.searchWithTerms(e)}}>
        <input type="text" name="searchterm" onChange={this.searchInput} value={this.state.searchterm}/>
        <input type="submit" name="submit" />
      </form></div>
    )
  }
}

export default GifSearch