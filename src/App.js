import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Components/Header';
import Footer from './Components/Footer'
import NavBar from './Components/NavBar';
import About from './Components/About';
import Form from './Components/Form';
import LifeProTips from './Components/LifeProTips';
import ErrorPage from './Components/ErrorPage'
import { getLifeProTips } from './actions/index'
import Home from './Components/Home';



class App extends Component {


  componentDidMount(){
    this.props.getLifeProTips();
  }

  render() {

    if (this.props.loading) {
      return (
        <h2>Loading data...</h2>
      )
    }


    return (
      <Router>
        <Header />
        <NavBar />
        <div className="app">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about" component={ About } />
          <Route exact path="/lifeprotip" component={ LifeProTips } />
          <Route exact path="/lifeprotip/new" component={ Form } />
          <Route component={ ErrorPage } />
        </Switch> 
        <Footer /> 
        </div>
      </Router>

    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getLifeProTips })(App);