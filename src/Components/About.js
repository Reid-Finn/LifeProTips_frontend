import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About this website</h1>
        <p> LifeProTips are tips that improve your life in one way or another. This website was created to allow people to read and share lifeprotips with each other!</p>
        <p> Together we can all become pros at whatever life throws at us!</p>
        <p>Click <Link to="/lifeprotip/new">here</Link> to share or create a lifeprotip!</p>
      </div>
    )
  }
}

export default About