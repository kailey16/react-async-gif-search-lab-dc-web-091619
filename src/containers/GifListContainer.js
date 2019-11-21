import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      gifsData: [],
      search: ""
    }
  }

  fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=`+`${this.state.search}`+`}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifs => {
      this.setState({
        gifsData: gifs
      })
    })
  }

  searchWithTerms = (e) => {
    console.log("searchterm: ", e.target.searchterm.value)
    this.setState({
      search: e.target.searchterm.value
    })
  }

  render() {
    this.fetchGifs()
    return (
      <div>
        <GifSearch searchWithTerms={this.searchWithTerms} />
        <GifList gifs={this.state.gifsData} />
      </div>
    )
  }

}

export default GifListContainer