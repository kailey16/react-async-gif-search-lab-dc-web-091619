import React from 'react'

const GifList = (props) => {
  if (props.gifs.length !== 0) {
    return (
      <div><ul>
        {props.gifs.data.slice(0,3).map((gif, index) => {
          return <li key={index}><img src={props.gifs.data[index].images.original.url} alt="gif" /></li>
        })}
      </ul></div>
    )
  } else { return <div></div> }
}

export default GifList