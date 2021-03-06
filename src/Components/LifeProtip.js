import React, { Component } from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';



class Lifeprotip extends Component {
  
  
handleLikes = () => {
  this.props.addLike(this.props.id, this.props.likes)
}

  render() {
    const lifeprotip = this.props
    return (
      <div className="lifeprotip">
        <h3>{ lifeprotip.title }</h3>
        
        <p>{ lifeprotip.content }</p>
        
        <span> - <em>{ lifeprotip.author }</em></span>
        <br />
        <span className="lifeprotip__likes"><ThumbUpAltIcon onClick={this.handleLikes}/> {lifeprotip.likes} </span>
      </div>
    )
  }
}



export default Lifeprotip;