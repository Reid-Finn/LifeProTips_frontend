import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>{' / '}
        <Link to="/about">About</Link>{' / '}
        <Link to="/lifeprotip">All LifeProTips</Link>{' / '}
        <Link to="/lifeprotip/new">New LifeProTip</Link>
      </div>
    )
  }
}

export default NavBar