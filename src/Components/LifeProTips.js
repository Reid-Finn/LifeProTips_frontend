import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addLike} from '../actions';
import LifeProTip from './LifeProTip'

class LifeProTips extends Component {
  constructor() {
    super();
    this.state = {
      ...this.props,
      search: ''
    }
  }

  updateSearch = e => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
    
  }
  render() {
    // console.log(this.props) - to see state mapped as props in console
    const filteredtips = this.props.lifeprotips.filter((lifeprotip) => {
      return lifeprotip.author.toLowerCase().includes(this.state.search.toLowerCase())
    });
    const lifeprotips = filteredtips.map((lifeprotip, i) => <LifeProTip key={i} id={lifeprotip.id} title={lifeprotip.title} content={lifeprotip.content} author={lifeprotip.author} likes={lifeprotip.likes} addLike={this.props.addLike}/>);
    return (
      <div className="lifeprotip-container">
        <input type="text" className="search" name="search" placeholder="search by author" onChange={this.updateSearch} value={this.state.search}/>
        { lifeprotips }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lifeprotips: state.lifeprotips
  }
}



export default connect(mapStateToProps, { addLike })(LifeProTips);